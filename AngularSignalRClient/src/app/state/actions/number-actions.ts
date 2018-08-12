import { Injectable } from '@angular/core';
import { Action, AnyAction } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../model/app-state.interface';
import { HubService } from '../../shared/services/hub.service';

@Injectable()
export class NumberActions {
  static GET_NUMBERS = 'GET_NUMBERS';
  static SET_NUMBER = 'SET_NUMBER';

  constructor(private ngRedux: NgRedux<IAppState>, private hub: HubService) {}

  getNumbers(message: string) {
    this.ngRedux.dispatch({
      type: NumberActions.GET_NUMBERS
    });
  }

  setNumber(number: number) {
    this.ngRedux.dispatch({
      type: NumberActions.SET_NUMBER,
      payload: number
    });
  }
}
