export const selectMovie =(value) =>{
    console.log(value);
    return{
        type: 'MOVIE',
        payload: value
    }
}