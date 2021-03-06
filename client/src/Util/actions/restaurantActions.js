import fetch from 'isomorphic-fetch'

export function fetchRestaurants() {
  console.log("Fetching restaurants...")
  return function(dispatch){
    dispatch({ type: 'LOAD_RESTAURANTS'})
    return fetch('/api/restaurants')
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'ADD_RESTAURANTS', restaurants: res.restaurants})
      })
    }
}

export function updateSortOption(sortKey, restaurants){
  return function(dispatch){
    dispatch({ type: 'LOAD_RESTAURANTS'})
    dispatch({ type: 'UPDATE_SORT_OPTION', sort: sortKey})
    dispatch({ type: 'UPDATE_SORTED_RESTAURANTS', sortedRestaurants: restaurants})
  }
}
