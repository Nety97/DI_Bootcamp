import {PLUS_ONE, MINUS_ONE} from './actions'

let initState = {
    age: 23
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
      case PLUS_ONE:
        return {...state, age: state.age +1}
      case MINUS_ONE:
        return {...state, age: state.age -1}
      default:
        return {...state}
    }
  }
  
