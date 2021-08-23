import { combineReducers } from 'redux';
import {PROP_ONE, PROP_TWO, PROP_THREE} from './actions'


let initState = {
    propertyOne: 'text one one',
    
    propertyThree: 0
}
let initStateTwo ={
    propertyTwo: 'text two two',
}

export const reducerOne = (state=initState, action={}) =>{
    switch (action.type) {
        case PROP_ONE:
            return{...state, propertyOne:action.payload}
        
        case PROP_THREE:
            return{...state, propertyThree: state.propertyThree +1}
        case 'MINUS_ONE':
                return{...state, propertyThree: state.propertyThree -1}
        default:
            return {...state}
    }
    
}

export const reducerTwo = (state=initStateTwo, action={}) =>{
    switch (action.type) {
        case PROP_TWO:
            return{...state, propertyTwo:action.payload}
    
        default:
            return{...state}
    }
}

export const reducer = combineReducers({
    reducerOne,
    reducerTwo
})
