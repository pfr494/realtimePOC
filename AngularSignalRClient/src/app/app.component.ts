import { Component } from '@angular/core';
import { HubService } from './shared/services/hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curNumber: number;
  curMessage: string;
  message = '';

  constructor(private hubService: HubService) {
    this.hubService.number$.subscribe(n => this.curNumber = n);
    this.hubService.message$.subscribe(m => this.curMessage = m);
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
