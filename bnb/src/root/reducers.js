import { combineReducers } from 'redux';
import * as HomeReducer from '../shell/Home/reducers';
import * as LoginReducer from '../shell/Login/reducers';
import * as ErrorReducer from '../shell/ErrorCompoenent/reducers';

const rootReducer = combineReducers({
  ...HomeReducer,
  ...LoginReducer,
  ...ErrorReducer
})

export default rootReducer;