import {ADD, ORDER, PROGRESS, ORDERPROG, DONE, ORDERDONE} from './actions'

let initState = {
    toDoList: [
        'first',
        'second'
    ],
    inProgressList: [
        'third',
        'forth'
    ],
    doneList: [
        'sixth',
        'seventh'
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

        case DONE:
            let newArrThree = [...state.doneList]
            newArrThree.push(action.payload)
            return {...state, doneList: [...newArrThree]}

        case ORDERDONE:
            return {...state, doneList: [...action.payload]}
        default:
            return {...state}
    }
}