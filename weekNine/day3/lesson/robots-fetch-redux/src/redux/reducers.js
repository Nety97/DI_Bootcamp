import {ROBOT} from './actions'
let initState ={
    robot: []
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case ROBOT:
            return {...state, robot: action.payload}
    
        default:
            return {...state}
    }
}