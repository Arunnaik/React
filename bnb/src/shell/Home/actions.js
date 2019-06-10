export function listHotels() {
    return { type: 'FETCH_HOTELS'};
  }
export function filterHotels(data,fromDate,toDate){

    
    const filterdList = data.filter((items)=>{
     const c = items.availability.map((dates)=>dates.from);
    console.log(new Date(c).getTime)
    return new Date(c).getTime<toDate;
    })
  
  return { type: 'FILTERED_HOTELS',filterdList};
}

export function sort(data,items){

  return { type: 'SORTED',data,items};
}