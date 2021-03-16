import produce from 'immer';
import types from './types';

const INITIAL_STATE = {
  customer: {},
  markets: [],
  market: {},
  cart: [],
  marketMapSelected: null,
  mapCenter: {
    lat: -23.561684,
    lng: -46.625378
  }
};

function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        draft.customer = action.customer;
      });
    }

    case types.SET_MARKETS: {
      return produce(state, (draft) => {
        draft.markets = action.markets;
      });
    }

    case types.SET_MARKET_MAP_SELECTED: {
      return produce(state, (draft) => {
        draft.marketMapSelected = action.market;
      });
    }

    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }

    case types.SET_MARKET: {
      return produce(state, (draft) => {
        draft.market = action.market;
      });
    }

    case types.TOGGLE_CART_PRODUCT: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((product) => {
          product._id === action.product._id
        });

        if(index !== -1) {
          draft.cart.splice(index, 1);
        } else {
          draft.cart.push(action.product);
        }
      });
    }

    default:
      return state;
  }
}

export default shop;
