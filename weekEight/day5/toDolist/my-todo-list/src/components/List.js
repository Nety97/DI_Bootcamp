import React from 'react';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            task: [
                'Example: Buy chocolate', 'Click on me to delete me'
            ]
        }
    }

    deleteTask = (index)=>{
        let arr2 = this.state.task
        arr2.splice(index,1)
        this.setState({task:arr2})
    }
    createTask =(e)=>{
        let arr3 = this.state.task
        if (e.keyCode === 13) {
            arr3.push(e.target.value)
            e.target.value = ''
        }
        
        this.setState({task:arr3})
        
    }

    render(){
        let arr = this.state.task
        return(
            <div>
                <h1>To Do List</h1>
                <ul>
                {arr.map((item,index)=>{
                    return(
                    <li onClick={()=> this.deleteTask(index)}><span>{item}</span></li>
                    )
                })}
                </ul>
                <input onKeyDown={this.createTask} placeholder='Create new Tasks'/>
                
            </div>
        )
    }
}

export default List