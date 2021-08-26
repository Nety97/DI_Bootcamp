export const DELETE = 'DELETE'

export const deleteBlog =(val)=>{
    return{
        type: DELETE,
        payload: val
    }
}