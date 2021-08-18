import React from 'react';
// import './App.css';

class Modal extends React.Component{
    constructor(){
        super();
        this.state ={
            
        }
    }

    

    render(){
        return(
            <>
            
          <div className='modal-background '>
            <div className='modal-body'>
            <button>Close</button>
            </div>
            
          </div>
            </>
        )
    }
}

export default Modal