
import { takeLatest, put,delay,call } from "redux-saga/effects";
import api from '../../utils/api';
function* getHotels(action) {
 const handler = 'bins/tl0bp';
 const response = yield call(api,Object.assign(action, { handler }));
 const results = response.data;
  yield put({ type: 'HOTEL_DATA', results });
  yield put ({ type: 'NAVIGATE', path: 'home' });
  
}

 export function* fetchHotels() {
  yield takeLatest("FETCH_HOTELS", getHotels);
}



