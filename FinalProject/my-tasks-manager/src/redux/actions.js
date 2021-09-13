export const ADD = 'ADD';
export const ORDER = 'ORDER';
export const PROGRESS = 'PROGRESS';
export const ORDERPROG = 'ORDERPROG';
export const DONE = 'DONE';
export const ORDERDONE = 'ORDERDONE';
export const USERDATA = 'USERDATA'

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

export const addToDone = (val) => {
    return{
        type: DONE,
        payload: val
    }
}

export const orderedDone = (val) => {
    return{
        type: ORDERDONE,
        payload: val
    }
}

export const userData = (val) => {
    console.log(val);
    return{
        type: USERDATA,
        payload: val
    }
}