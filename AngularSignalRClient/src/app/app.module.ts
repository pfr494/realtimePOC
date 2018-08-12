import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HubService } from './shared/services/hub.service';
import { HubConnection} from '@aspnet/signalr';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/Input';
import { MatCardModule } from '@angular/material/card';
import { MessageActions } from './state/actions/message-actions';
import { StateModule } from './state/state/state.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    StateModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
