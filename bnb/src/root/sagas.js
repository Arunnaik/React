import { fork,all } from 'redux-saga/effects';
import * as   LoginSagas from '../shell/Login/sagas';
import * as  HomeSagas from '../shell/Home/sagas';


export default function* root() {
    yield all([...Object.values(LoginSagas),...Object.values(HomeSagas)].map(fork));
  }
