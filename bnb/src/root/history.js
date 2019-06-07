export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) return undefined;
      console.log(JSON.parse(serializedState));
      return JSON.parse(serializedState);
     
    } catch (err) {
      console.log('arunnnnnn'+err)
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
      // console.log('trying to save cookie');
      // console.log(state);
      // if (state.user !== null) cookies.set('token', state.user.jwt_token || null);
    } catch (err) {
      console.log(err);
    }
  };
  
  export const getStateValue = (key) => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) return undefined;
      const state = JSON.parse(serializedState);
      return state[key];
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };
  