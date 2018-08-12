export interface IAppState {
  message: IMessage;
  number: number;
}

export interface IMessage {
  value: string;
  error: string;
}

export const INITIAL_APP_STATE: IAppState = {
  message: {
    value: '',
    error: null
  },
  number: 0,
};
