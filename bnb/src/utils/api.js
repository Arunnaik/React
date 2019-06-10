import axios from 'axios';
import { getStateValue } from '../root/localStorage';
//import { put } from 'redux-saga/effects';
// import { logout } from '../shells/TopBar/actions';

export default function* api(action) {
  const x = getStateValue('user') || null;
  
  const baseUrl = 'https://api.myjson.com/';
  


  try {
    const response = yield axios({
      method: 'get',
      url: baseUrl +action.handler,
      //data: action.payload || null,
      //params: action.query || null,
    });

    return response;
  } catch (error) {
    if (error && error.response) {
      if (error.response.status === 401) {
        //yield put({ type: 'USER_LOGOUT' });
      } else if (error.response.status === 400) {
        return error.response;
      }
    }
  
    // returning dummy data to ensure the calling saga doesnt get stuck
    return { data: { data: null }, error };
  }
}
