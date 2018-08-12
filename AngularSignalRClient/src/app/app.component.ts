import { Component } from '@angular/core';
import { HubService } from './shared/services/hub.service';
import { MessageActions } from './state/actions/message-actions';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() message$: string;
  curNumber: number;
  curMessage: string;
  message = '';

  constructor(private hubService: HubService, private messageActions: MessageActions) {
      this.hubService.number$.subscribe(n => this.curNumber = n);
      this.hubService.message$.subscribe(m => this.curMessage = m);
    this.messageActions.subscribe();
  }

  updateMessage(msg: string) {
    console.log(this.message);

    this.hubService.sendMessage(msg);
  }

  getNumber() {
    this.hubService.getNumber();
  }

  dispatchNumbes() {
    this.hubService.getNumbers();
  }
}
