/* eslint-disable no-console */
import {
  all,
  takeEvery,

  delay,
} from 'redux-saga/effects';

function* handleIncrementSaga() {
  // wait 2s
  yield delay(2000);
  console.log('waiting done, dispatch action');
  // success
}
function* helloSaga() {
  yield takeEvery(handleIncrementSaga);
}

// eslint-disable-next-line require-yield
function* goSaga() {
  console.log('end saga');
}

export default function* rootSaga() {
  console.log('Root Saga');
  yield all([goSaga(), helloSaga()]);
}
