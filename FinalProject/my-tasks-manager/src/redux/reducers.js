import {ADD, ORDER, PROGRESS, ORDERPROG} from './actions'

let initState = {
    toDoList: [
        'first',
        'second'
    ],
    inProgressList: [
        'third',
        'forth'
    ]
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case ADD: 
        let newArr = [...state.toDoList]
        newArr.push(action.payload)
            return {...state, toDoList: [...newArr] }
        case ORDER:
            return {...state, toDoList: [...action.payload]}
        case PROGRESS: 
        let newArrTwo = [...state.inProgressList]
        newArrTwo.push(action.payload)
            return {...state, inProgressList: [...newArrTwo]}
        case ORDERPROG:
            return {...state, inProgressList: [...action.payload]}
        default:
            return {...state}
    }
}