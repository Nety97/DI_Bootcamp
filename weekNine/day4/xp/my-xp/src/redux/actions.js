export const PLUS_ONE = 'PLUS_ONE';
export const MINUS_ONE = 'MINUS_ONE';
export const IFODD = 'IFODD'
export const ONESECOND = 'ONESECOND'

export const plusOne = () => {
  return {
    type: PLUS_ONE
  }
}

export const minusOne = () => {
  return {
    type: MINUS_ONE
  }
}

export const ifOdd = () => {
    return{
        type: IFODD
    }
}

export const waitOne = () => {
    return{
        type: ONESECOND
    }
}