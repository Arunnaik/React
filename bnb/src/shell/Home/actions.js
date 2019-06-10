export function listHotels() {
  return { type: "FETCH_HOTELS" };
}
export function filterHotels() {
  return { type: "FILTERED_HOTELS"};
}

export function sort(data, items) {
  return { type: "SORTED", data, items };
}

export function StartDateToStor(startDate) {
  return { type: "START_DATE", startDate };
}
export function endDateToStor(endDate) {
  return { type: "END_DATE", endDate };
}
