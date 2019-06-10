export function navigateToHome() {
    return { type: 'NAVIGATE', path: 'home' };
  }

  export function pushdata() {
    return { type: 'NAVIGATE', data:'arun' };
  }

  export function listHotels(){
    return {type:'FETCH_HOTELS'}
  }