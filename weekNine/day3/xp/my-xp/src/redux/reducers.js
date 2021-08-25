import {INSERT, DELETE} from './actions'
let initState ={ 
    data: []
}

export const reducer =(state= initState, action={})=>{
    switch (action.type) {
        case INSERT:
            return {...state, data: [...action.payload]}
        case DELETE:
            let arr = state.data
            arr.splice([action.payload],1)
            return {...state, data: [...arr]}
        default:
            return{...state}
    }
}
