import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HubService } from './shared/services/hub.service';
import { HubConnection} from '@aspnet/signalr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
