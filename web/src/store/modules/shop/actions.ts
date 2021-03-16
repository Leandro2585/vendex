import types from './types';

export function setCustomer() {
  return { type: types.SET_CUSTOMER, customer };
}

export function requestMarkets() {
  return { type: types.REQUEST_MARKETS };
}

export function setMarkets(markets) {
  return { type: types.SET_MARKETS, markets };
}

export function setShopMapSelected(market) {
  return { type: types.SET_MARKET_MAP_SELECTED, market };
}

export function setMapCenter(location) {
  return { type: types.SET_MAP_SELECTED, location };
}

export function requestMarket(id) {
  return { type: types.REQUEST_MARKET, id };
}

export function setMarket(market) {
  return { type: types.SET_MARKET, market };
}

export function toggleCartProduct(product) {
  return { type: types.TOGGLE_CART_PRODUCT, product };
}
