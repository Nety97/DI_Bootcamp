export const ADD = 'ADD';
export const ORDER = 'ORDER';
export const PROGRESS = 'PROGRESS';
export const ORDERPROG = 'ORDERPROG'

export const addTask =(val)=>{
    return{
        type: ADD,
        payload: val
    }
}

export const orderedArr = (val) => {
    return{
        type: ORDER,
        payload: val
    }
}

export const addInProgress = (val) => {
    return{
        type: PROGRESS,
        payload: val
    }
}

export const orderedProgress = (val) => {
    return{
        type: ORDERPROG,
        payload: val
    }
}