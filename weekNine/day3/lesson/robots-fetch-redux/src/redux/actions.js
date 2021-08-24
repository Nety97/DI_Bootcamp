export const ROBOT = 'ROBOT'
export const saveRobots = (value) =>{
    
    return{
        type: ROBOT,
        payload: value
    }
}
export const fetchRobots = () => (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
    //   this.props.selectRobots(data) 
      dispatch({type: ROBOT, payload: data})
    })
    .catch(e => {
      console.log(e);
    })
}