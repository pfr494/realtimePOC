import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { IAppState, INITIAL_APP_STATE } from 'src/app/state/model/app-state.interface';
// import { rootReducer } from '../reducers/root.reducer';

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MessageActions } from '../actions/message-actions';
import { messageReducer } from '../reducers/message-reducer';

@NgModule({
  imports: [NgReduxModule],
  declarations: [],
  providers: [MessageActions]
})
export class StateModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(messageReducer, INITIAL_APP_STATE, [createLogger(), thunk]);
  }
}
