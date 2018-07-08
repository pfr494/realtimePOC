import { Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { Observable, Subject } from 'rxjs';

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

    this.hub.on('receiveMessage', (receivedMessage: string) => {
      this.message$.next(receivedMessage);
    });

    this.hub.on('nextNumber', (nextNumber: number) => {
      this.number$.next(nextNumber);
    });
  }

  public sendMessage(message: string): void {
    this.hub
      .invoke('SendMessage', message)
      .catch(err => console.error(err));
  }

  public getNumbers(): void {
    this.hub.invoke('GetNumbers');
  }

  public getNumber(): void {
    this.hub.invoke('GetNumber');
  }
}
