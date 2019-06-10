import { UNCAUGHT_ERR, CLEAR_ERR } from './actions';

export function error(state = { err: null, info: null }, action) {
  switch (action.type) {
    case UNCAUGHT_ERR: {
      const { err, info } = action;
      return Object.assign({}, state, { err, info });
    }

    case CLEAR_ERR: {
      return Object.assign({}, state, { err: null, info: null });
    }

    default:
      return state;
  }
}
