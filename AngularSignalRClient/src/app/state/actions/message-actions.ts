import { Injectable } from '@angular/core';
import { Action, AnyAction } from 'redux';
import ReduxThunk from 'redux-thunk';
import { IAppState } from '../model/app-state.interface';
import { HubService } from '../../shared/services/hub.service';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class MessageActions {
  static SUBSCRIBE = 'SUBSCRIBE';
  static SET_MESSAGE = 'SET_MESSAGE';
  static SET_MESSAGE_FAILED = 'SET_MESSAGE_FAILED';
  static NEW_MESSAGE_RECIEVED = 'DECREMENT';

  constructor(private ngRedux: NgRedux<IAppState>, private hub: HubService) {
  }

  subscribe() {
    return (dispatch, getState) => {
      this.hub.subscribeForMessages();
      this.hub.message$.subscribe(s => dispatch(this.newMessageRecieved(s)));
      this.ngRedux.dispatch({
        type: MessageActions.SUBSCRIBE
      });
    };
  }

  setMessage(message: string) {
    return (dispatch, getState) => {
      const { lastMessage } = getState().message;
      console.log(lastMessage);
      this.hub.sendMessage(message)
      .catch(err => dispatch(this.setMessageFailed(err)));
    };
  }

  setMessageFailed(err: string) {
    this.ngRedux.dispatch({
      type: MessageActions.SET_MESSAGE_FAILED,
      payload: err
    });
  }

  newMessageRecieved(message: string) {
    this.ngRedux.dispatch({
      type: MessageActions.NEW_MESSAGE_RECIEVED,
      payload: message
    });
  }
}
