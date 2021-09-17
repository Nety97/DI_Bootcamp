import React from "react";
import ToDoList from "./ToDoList";
import {connect} from 'react-redux'
class Tables extends React.Component{
    constructor(){
        super();
        this.state={
            project: '',
            tablesByUser: null
        }
    }

    saveTask = (e) => {
        this.setState({project: e.target.value})
    }

    createTable = () => {
        const {project} = this.state
        if (project) {
            fetch('http://localhost:4000/createTable',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId: this.props.user[0].user_id , tableName: project})
        })
        .then(res => res.json())
        .then(data => {
           
           this.setState({tablesByUser: data})
        })
        .catch(err => console.log(err))
        }
        
    }
    
    componentDidMount () {

        fetch('http://localhost:4000/getUserTables',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId: this.props.user[0].user_id })
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
        })
        .catch(err => console.log(err))
    }

    render(){
        let {user, token} = this.props
        console.log(user);
        console.log(this.state.tablesByUser);
        return(
            <div>
                <h1>Welcome {user[0].username}</h1>

                <p>Create new Project</p>
                <input onChange={this.saveTask} value={this.state.project} placeholder='The name of your project' />
                <button onClick={this.createTable}>Create</button>
                <ToDoList/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.user,
        token: state.token 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tables)