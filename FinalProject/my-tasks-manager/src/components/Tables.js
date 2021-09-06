import React from "react";
import ToDoList from "./ToDoList";

class Tables extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div>
                <h1>Tables</h1>
                <ToDoList/>
            </div>
        )
    }
}

export default Tables