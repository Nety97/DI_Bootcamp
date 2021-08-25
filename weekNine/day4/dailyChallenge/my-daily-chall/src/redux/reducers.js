import {SELECT,ROBOTS} from './actions';

let initState = {
  robots: [],
  searchText: '',
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case SELECT:
      return {...state, searchText:action.payload}
    case ROBOTS:
      return {...state, robots:action.payload}
    default:
      return {...state}
  }
}
