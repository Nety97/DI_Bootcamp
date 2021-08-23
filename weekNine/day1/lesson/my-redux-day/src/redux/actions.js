export const PROP_ONE = 'PROP_ONE';
export const PROP_TWO = 'PROP_TWO';
export const PROP_THREE = 'PROP_THREE'

export const changePropOne = (value) =>{
    return {
        type: PROP_ONE,
        payload: value
    }
}
export const changePropTwo = (value)=>{
    return{
        type: PROP_TWO,
        payload: value
    }
}

export const changeCounter = ()=>{
    
    return{
        
        type: PROP_THREE,
        
    }
}
export const minusOne = ()=>{
    return{
        type: 'MINUS_ONE'
    }
}
