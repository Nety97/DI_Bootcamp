import React from "react";
import {connect} from 'react-redux';
import {addTask, orderedArr, addInProgress,orderedProgress, addToDone, orderedDone} from '../redux/actions';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class ToDoList extends React.Component{
    constructor(){
        super();
        this.state={
            task: '',
            taskProgress: '',
            taskDone: ''
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
    savetaskThree = (e)=>{
        this.setState({taskDone: e.target.value})
        
    }
    sendReduxThree = () => {
        let {taskDone} = this.state
        if (!taskDone) {
            return 
        }
        this.props.addToDone(taskDone)
        this.setState({taskDone: ''})
        
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
            console.log( [reorderedItem] );
            this.props.orderedArr(items)
        }
        if (result.destination.droppableId === result.source.droppableId && result.destination.droppableId === "colunmTwo") {
            const items = this.props.inProgressList;
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem)

            this.props.orderedProgress(items)
        }
        if (result.destination.droppableId === result.source.droppableId && result.destination.droppableId === "colunmThree") {
            const items = this.props.doneList;
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem)

            this.props.orderedDone(items)
        }

        if (result.source.droppableId !== result.destination.droppableId) {
            if (result.destination.droppableId === "colunmOne") {
                if (result.source.droppableId === "colunmTwo") {
                    const items = this.props.inProgressList;
                    const [reorderedItem] = items.splice(result.source.index, 1);
                    // items.splice(result.destination.index, 0)
        
                    // console.log(result.destination.index);
                    // this.props.orderedProgress(items)

                    const itemsTwo = this.props.toDoList;
                    // const [reorderedItem] = itemsTwo.splice(result.source.index, 1);
                    // first try to make it work
                    itemsTwo.splice(result.destination.index, 0, reorderedItem)

                    this.props.orderedArr(itemsTwo)
                    console.log(this.props.inProgressList);
                }
                if (result.source.droppableId === "colunmThree") {
                    const items = this.props.doneList;
                    const [reorderedItem] = items.splice(result.source.index, 1);

                    const itemsTwo = this.props.toDoList;
                    itemsTwo.splice(result.destination.index, 0, reorderedItem)

                    this.props.orderedArr(itemsTwo)
                }
                
            }
            if (result.destination.droppableId === "colunmTwo") {
                if (result.source.droppableId === "colunmOne") {
                    const items = this.props.toDoList;
                    const [reorderedItem] = items.splice(result.source.index, 1);

                    const itemsTwo = this.props.inProgressList
                    itemsTwo.splice(result.destination.index, 0, reorderedItem)
                    this.props.orderedProgress(itemsTwo)
                }
                if (result.source.droppableId === "colunmThree") {
                    const items = this.props.doneList;
                    const [reorderedItem] = items.splice(result.source.index, 1);

                    const itemsTwo = this.props.inProgressList
                    itemsTwo.splice(result.destination.index, 0, reorderedItem)
                    this.props.orderedProgress(itemsTwo)
                }
                
            }
            if (result.destination.droppableId === "colunmThree") {
                if (result.source.droppableId === "colunmOne") {
                    const items = this.props.toDoList;
                    const [reorderedItem] = items.splice(result.source.index, 1);

                    const itemsTwo = this.props.doneList
                    itemsTwo.splice(result.destination.index, 0, reorderedItem)
                    this.props.orderedDone(itemsTwo)
                }
                if (result.source.droppableId === "colunmTwo") {
                    const items = this.props.inProgressList;
                    const [reorderedItem] = items.splice(result.source.index, 1);

                    const itemsTwo = this.props.doneList
                    itemsTwo.splice(result.destination.index, 0, reorderedItem)
                    this.props.orderedDone(itemsTwo)
                }
            }
            
        }
        
    }

    render(){
        
        return(
            <div className='father'>
                <DragDropContext onDragEnd={this.handleOnDragEnd}>
                    <Droppable droppableId='colunmOne'>
                        {(provided)=>(
                            <div className='columnOne'>
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
                

                    <Droppable droppableId='colunmTwo'>
                        {(provided)=>(
                            <div className='columnTwo'>
                                <h1>In progress</h1>
                                <ul  {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.props.inProgressList.map((item,index)=>{
                                        return <Draggable key={item} draggableId={item} index={index}>
                                            {(provided)=>(
                                                
                                                <li {...provided.draggableProps} {...provided.dragHandleProps}  ref={provided.innerRef} className='tasktwo'>{item} </li>
                                                
                                            )}
                                            
                                            </Draggable>
                                    })}
                                    
                                </ul>
                                {provided.placeholder}
                                <input onChange={this.savetaskTwo} value={this.state.taskProgress} placeholder='Add in progress tasks'/>
                                <button onClick={this.sendReduxTwo}>Create task</button>
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId='colunmThree'>
                        {(provided)=>(
                            <div className='columnThree'>
                                <h1>Done</h1>
                                <ul  {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.props.doneList.map((item,index)=>{
                                        return <Draggable key={item} draggableId={item} index={index}>
                                            {(provided)=>(
                                                
                                                <li {...provided.draggableProps} {...provided.dragHandleProps}  ref={provided.innerRef} className='taskthree'>{item} </li>
                                                
                                            )}
                                            
                                            </Draggable>
                                    })}
                                    
                                </ul>
                                {provided.placeholder}
                                <input onChange={this.savetaskThree} value={this.state.taskDone} placeholder='Add done tasks'/>
                                <button onClick={this.sendReduxThree}>Create task</button>
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
        inProgressList: state.inProgressList,
        doneList: state.doneList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (val)=> dispatch(addTask(val)),
        orderedArr: (val)=> dispatch(orderedArr(val)),
        addInProgress: (val)=> dispatch(addInProgress(val)),
        orderedProgress: (val)=> dispatch(orderedProgress(val)),
        addToDone: (val)=> dispatch(addToDone(val)),
        orderedDone: (val)=> dispatch(orderedDone(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)