export function login(state = {}, action) {
    switch (action.type) {
      case 'GET_DATA': {
        const { data } = action;
        return Object.assign({}, state, { data });
      }
      case 'AGE_UP_ASYNC':{
        const { value } = action;
        return Object.assign({}, state, { value });
      }
      default:
        return state;
    }
  }