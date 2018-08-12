import { combineReducers, Action, Reducer, AnyAction } from 'redux';
import { IAppState, INITIAL_APP_STATE } from 'src/app/state/model/app-state.interface';
import { messageReducer } from './message-reducer';
import { numberReducer } from 'src/app/state/reducers/number-reducer';


// export const rootReducer: Reducer<IAppState, AnyAction> = combineReducers({
//   messageReducer,
//   numberReducer
// });

