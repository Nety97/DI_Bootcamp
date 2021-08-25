import {FNAME,SNAME,RESULT} from './actions';

const initState = {
  fname: '',
  sname: '',
  results: {}
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case FNAME:
      return {...state,fname:action.payload}
    case SNAME:
      return {...state,sname:action.payload}
    case RESULT:
      return {...state, results:action.payload}
    default:
      return {...state}
  }
}
