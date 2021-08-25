import {PLUS_ONE, MINUS_ONE, IFODD, ONESECOND} from './actions'

let initState = {
    counter: 0
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
      case PLUS_ONE:
        return {...state, counter: state.counter +1}
      case MINUS_ONE:
        return {...state, counter: state.counter -1}
      case IFODD: 
        if (state.counter % 2) {
            return {...state, counter: state.counter +1}
        }
      case ONESECOND:
            return {...state, counter: state.counter +1}
        
      default:
        return {...state}
    }
  }
  
