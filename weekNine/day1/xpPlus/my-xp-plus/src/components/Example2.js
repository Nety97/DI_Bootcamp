import React from 'react';
import Data2 from './Data2.json'

class Example2 extends React.Component{
    constructor(){
        super();
        this.state={
            data: Data2.Skills,
            
        }
    }
componentDidMount(){
    // console.log(this.state.data);
}
    render(){
        let {Area,SkillSet} = this.state.data[0]
        // let {Area2, SkillSet2} = this.state.data[1]
        
        return(
            <div>
                <h3>{Area}</h3>
                <ul>
                    <li>{SkillSet[0].Name}</li>     
                    <li>{SkillSet[1].Name}</li>  
                    <li>{SkillSet[2].Name}</li>           
                </ul>
                <h3>{this.state.data[1].Area}</h3>
                <ul>
                    <li>{this.state.data[1].SkillSet[0].Name}</li>
                    <li>{this.state.data[1].SkillSet[1].Name}</li>
                    <li>{this.state.data[1].SkillSet[2].Name}</li>
                    <li>{this.state.data[1].SkillSet[3].Name}</li>
                    <li>{this.state.data[1].SkillSet[4].Name}</li>
                </ul>
            </div>
        )
    }
}

export default Example2