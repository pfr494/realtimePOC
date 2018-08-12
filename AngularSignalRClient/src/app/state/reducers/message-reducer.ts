import { IAppState } from 'src/app/state/model/app-state.interface';
import { MessageActions } from '../actions/message-actions';
import { AnyAction } from 'redux';

export function messageReducer(lastState: IAppState, action: AnyAction): IAppState {
  switch (action.type) {
    case MessageActions.NEW_MESSAGE_RECIEVED:
      return {
        ...lastState,
        message: action.payload.message
      };
    case MessageActions.SET_MESSAGE:
      return {
        ...lastState,
        message: action.payload.message
      };
    case MessageActions.SET_MESSAGE_FAILED:
    return {
      ...lastState,
      message: action.payload.error
    };
  }

  // We don't care about any other actions right now.
  return lastState;
}
