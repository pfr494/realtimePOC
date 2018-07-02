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
      .withUrl('http://localhost:5000/chat')
      .build();

    this.hub
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this.hub.on('sendToAll', (receivedMessage: string) => {
      this.message$.next(receivedMessage);
    });

    this.hub.on('nextNumber', (nextNumber: number) => {
      this.number$.next(nextNumber);
    });
  }

  public sendMessage(message: string): void {
    this.hub
      .invoke('sendToAll', message)
      .catch(err => console.error(err));
  }
}
