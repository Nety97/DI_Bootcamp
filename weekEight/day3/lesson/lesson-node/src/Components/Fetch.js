import React from "react"

class Fetch extends React.Component{
    constructor(){
        super();
        this.state={
            countries: [],
            city: []
        }
    }
    getCountries = () => {
        fetch('http://localhost:8080/cont')
        .then(res => res.json())
        .then(dat => {
            this.setState({countries: dat})
        })

    }
    getCities = () =>{
        fetch('http://localhost:8080/number')
        .then(res => res.json())
        .then(dat => {
            this.setState({city:dat})
        })
    }
    componentDidMount(){
        this.getCountries()
        
    }
    
    sendData =(e) =>{
        console.log(e.target.value)
        
        fetch('http://localhost:8080/number',{
            method: 'POST',
            body: JSON.stringify({id: e.target.value}), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));
        
        this.getCities()
    }

    render(){
        
        
        return(
            <>
                <select onChange={this.sendData}>
                {this.state.countries.map((item,idex) =>{
                    return <option value={item.country_id}>{item.country}</option>
                })}
                </select>
                <select>
                {this.state.city.map((item,idex) =>{
                    return <option value={item.cityy_id}>{item.city}</option>
                })}
                </select>
                {console.log(this.state.countries)}
            </>
        )
    }
}


export default Fetch