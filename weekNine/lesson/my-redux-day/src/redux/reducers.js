import {PROP_ONE, PROP_TWO} from './actions'


let initState = {
    propertyOne: 'text one one',
    propertyTwo: 'text two two'
}

export const reducer = (state=initState, action={}) =>{
    switch (action.type) {
        case PROP_ONE:
            return{...state, propertyOne:action.payload}
        case PROP_TWO:
            return{...state, propertyTwo:action.payload}
        default:
            return {...state}
    }
    
}

