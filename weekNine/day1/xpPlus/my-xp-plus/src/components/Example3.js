import React from 'react';
import Data2 from './Data2.json'
class Example3 extends React.Component{
    constructor(){
        super();
        this.state={
            data: Data2
        }
    }

    render(){
        
        let arr = this.state.data.Experiences
        // for (let index = 0; index < arr.length; index++) {
        //     return <div>
        //             <img src={arr[index].logo}></img>
        //     </div>
            
        // }
        arr.map((item,index)=>{
            return <div>
                <img src={item.logo}></img>
                
            </div>
        })
        return(
            <div>
                {arr.map((item,index)=>{
                    return <div> 
                     <img src={item.logo}></img>
                    <a href={item.url}>{item.companyName}</a>
                    <p>{item.roles[0].title}</p>
                    <p>{item.roles[0].startDate}{item.roles[0].location}</p>
                    <p>{item.roles[0].description}</p>
                    </div>
                })}
            </div>
        )
    }
}

export default Example3