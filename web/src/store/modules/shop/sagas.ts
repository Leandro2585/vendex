import { takeLatest, all, call } from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import { setMarkets, setMarket } from './actions';

export function* requestMarkets() {
  const response = yield call(api.get, '/markets');
  const { data } = response;
  yield put(setMarkets(data.markets));
}

export function* requestMarket(payload) {
  const response = yield call(api.get, `/markets/${payload.id}`);
  const { data } = response;
  yield put(setMarket(data.markets));
}


export default all([
  takeLatest(types.REQUEST_MARKETS, requestMarkets),
  takeLatest(types.REQUEST_MARKET, requestMarket),
]);
