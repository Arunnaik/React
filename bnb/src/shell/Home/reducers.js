export function home(state = {}, action) {
    switch (action.type) {
      case 'HOTEL_DATA': {
        const { results } = action;
        return Object.assign({}, state, { hotelList:results });
      }
     case 'FILTERED_HOTELS':{
       const {filterdList} =action;
       return Object.assign({}, state, { filterdList });

     }
     case 'SORTED':{
       const {items} =action;
       if(items==='price'){
         state.hotelList.hotels.sort((a,b)=>a.price-b.price);
       }
       if(items==='name'){
        state.hotelList.hotels.sort((a,b)=>(a.name>b.name)?1:-1);
      }
       return Object.assign({}, state);

     }
      default:
        return state;
    }
  }