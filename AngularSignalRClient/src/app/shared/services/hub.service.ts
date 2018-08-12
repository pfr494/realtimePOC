import { Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { Observable, Subject } from 'rxjs';
import { MessageActions } from 'src/app/state/actions/message-actions';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  private hub: HubConnection;
  number$ = new Subject<number>();
  message$ = new Subject<string>();

  constructor() {
    this.hub = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/hub')
      .build();

    this.hub
      .start()
      .then(() => console.log('On the hub, I am'))
      .catch(err => console.log('An error while establishing connection, there was :('));
  }

  subscribeForMessages() {
    this.hub.on('receiveMessage', (receivedMessage: string) => {
      this.message$.next(receivedMessage);
    });
  }

  subscribeForNumbers() {
    this.hub.on('nextNumber', (nextNumber: number) => {
      this.number$.next(nextNumber);
    });
  }

  public sendMessage(message: string): Promise<any>  {
    return this.hub.invoke('SendMessage', message);
  }

  public getNumbers(): void {
    this.hub.invoke('GetNumbers');
  }

  public getNumber(): void {
    this.hub.invoke('GetNumber');
  }
}
