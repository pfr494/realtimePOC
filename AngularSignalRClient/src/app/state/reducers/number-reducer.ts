import { IAppState } from 'src/app/state/model/app-state.interface';
import { MessageActions } from '../actions/message-actions';
import { NumberActions } from '../actions/number-actions';
import { AnyAction, Reducer } from 'redux';

export function numberReducer(state: IAppState, action: AnyAction): IAppState {
  switch (action.type) {
    case NumberActions.GET_NUMBERS:
      return {
        ...state,
      };
    case NumberActions.SET_NUMBER:
      return {
        ...state,
        number: action.payload.number
      };
  }

  // We don't care about any other actions right now.
  return state;
}
