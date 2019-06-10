import { takeLatest, put, call } from 'redux-saga/effects';
import history from '../../root/history';

function Navigation(action) {
      history.push(action.path);
  }
  
export function* NavigationHandler() {
    yield takeLatest('NAVIGATE', Navigation);
}



