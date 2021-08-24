export const INSERT = 'INSERT'
export const DELETE = 'DELETE'
export const saveData = (value) =>{
    console.log(value);
    return{
        type: INSERT,
        payload: value
    }
}

export const deleteData = (id) =>{
    console.log(id);
    return{
        type: DELETE,
        payload: id
    }
}