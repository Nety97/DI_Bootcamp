import React from "react";
import {connect} from 'react-redux';
import {addTask, orderedArr, addInProgress,orderedProgress} from '../redux/actions';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class ToDoList extends React.Component{
    constructor(){
        super();
        this.state={
            task: '',
            taskProgress: ''
        }
    }

    savetask = (e)=>{
        this.setState({task: e.target.value})
        
    }
    sendRedux = () => {
        let {task} = this.state
        if (!task) {
            return 
        }
        this.props.addTask(task)
        this.setState({task: ''})
        
    }
    savetaskTwo = (e)=>{
        this.setState({taskProgress: e.target.value})
        
    }
    sendReduxTwo = () => {
        let {taskProgress} = this.state
        if (!taskProgress) {
            return 
        }
        this.props.addInProgress(taskProgress)
        this.setState({taskProgress: ''})
        
    }
    handleOnDragEnd = (result) =>{
        if (!result.destination) {
            return
        }
        console.log(result);
        if (result.destination.droppableId === result.source.droppableId && result.destination.droppableId === "colunmOne") {
            const items = this.props.toDoList;
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem)

            this.props.orderedArr(items)
        }
        if (result.destination.droppableId === result.source.droppableId && result.destination.droppableId === "colunmTwo") {
            const items = this.props.inProgressList;
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem)

            this.props.orderedProgress(items)
        }
        if (result.source.droppableId !== result.destination.droppableId) {
            const items = this.props.toDoList;
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem)

            this.props.orderedArr(items)
        }
        
    }
    // handleOnDragEndTwo = (result) =>{
    //     if (!result.destination) {
    //         return
    //     }
    //     console.log(result);
        // const items = this.props.inProgressList;
        // const [reorderedItem] = items.splice(result.source.index, 1);
        // items.splice(result.destination.index, 0, reorderedItem)

        // this.props.orderedProgress(items)
    // }
    render(){
        
        return(
            <div className='father'>
                <DragDropContext onDragEnd={this.handleOnDragEnd}>
                    <Droppable droppableId='colunmOne'>
                        {(provided)=>(
                            <div className='column'>
                                <h1>To Do List</h1>
                                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                                        
                                        {this.props.toDoList.map((item,index)=>{
                                            return <Draggable key={item} draggableId={item} index={index}> 
                                                    {(provided)=>(

                                                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='task'>{item}</li>
                                                    )}
                                                </Draggable>
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                    {provided.placeholder}
                                
                                    <input onChange={this.savetask} value={this.state.task} placeholder='Add some tasks'/>

                                    <button onClick={this.sendRedux}>Create task</button>
                            </div>
                        )}
                        
                    </Droppable>
                {/* </DragDropContext>     */}
                {/* <DragDropContext onDragEnd={this.handleOnDragEndTwo}> */}
                    <Droppable droppableId='colunmTwo'>
                        {(provided)=>(
                            <div className='column'>
                                <h1>In progress</h1>
                                <ul  {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.props.inProgressList.map((item,index)=>{
                                        return <Draggable key={item} draggableId={item} index={index}>
                                            {(provided)=>(
                                                
                                                <li {...provided.draggableProps} {...provided.dragHandleProps}  ref={provided.innerRef} className='task'>{item} </li>
                                                
                                            )}
                                            
                                            </Draggable>
                                    })}
                                    
                                </ul>
                                {provided.placeholder}
                                <input onChange={this.savetaskTwo} value={this.state.taskProgress} placeholder='Add some tasks'/>
                                <button onClick={this.sendReduxTwo}>Create task</button>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        toDoList: state.toDoList,
        inProgressList: state.inProgressList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (val)=> dispatch(addTask(val)),
        orderedArr: (val)=> dispatch(orderedArr(val)),
        addInProgress: (val)=> dispatch(addInProgress(val)),
        orderedProgress: (val)=> dispatch(orderedProgress(val))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)