export function home(state = {}, action) {
    switch (action.type) {
      case 'HOTEL_DATA': {
        const { results } = action;
        return Object.assign({}, state, { hotelList:results });
      }
      case 'START_DATE':{
        const {startDate} =action;
        return Object.assign({}, state, { startDate });
      }
      case 'END_DATE':{
        const {endDate} =action;
        return Object.assign({}, state, { endDate });
      }
     case 'FILTERED_HOTELS':{
       const filterdList = state.hotelList.hotels.filter((items)=>{
        return   items.availability.filter((dates)=>{
           const splitedFrom = dates.from.split('-');
    
          const splitedTo = dates.to.split('-');
          const isofroDate= `${splitedFrom[2]}-${splitedFrom[1]}-${splitedFrom[0]}`;
          const isoToDate =`${splitedTo[2]}-${splitedTo[1]}-${splitedTo[0]}`;
    
         console.log(new Date(isoToDate).getTime())
         return new Date(isofroDate).getTime()>=state.startDate&&new Date(isoToDate).getTime()<=state.endDate
          }).length>0
        })
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