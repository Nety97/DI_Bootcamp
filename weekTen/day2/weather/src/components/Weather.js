import React from 'react';

class Weather extends React.Component{
    constructor(){
        super();
        this.state={
            city: '',
            weather: {}
        }
    }

    componentDidMount(){
        
    }

    handlerChange = (e) =>{
        this.setState({city: e.target.value})
    }

    searchWeather = () => {
        let {city} = this.state
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca835a1ee806eea78cd2d6249580efba&lang=en`)
        .then(res => res.json())
        .then(data => {
            this.setState({weather: data})
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render(){
        let {weather} = this.state
        console.log(weather);
        let {main, sys, name} = weather
        if (Object.keys(weather).length === 0) {
            return(
                <div>
                    <h1>Search The Weather by City name</h1>
                    <input className='input' onChange={this.handlerChange} placeholder='Example "Mexico City"' />
                    <button className='button' onClick={this.searchWeather}>Search</button>
                </div>
            )
        } else if (Object.keys(weather).length === 13) {
            return(
                <div>
                    <h1>Search The Weather by City name</h1>
                    <input className='input' onChange={this.handlerChange} placeholder='Example "Mexico City"' />
                    <button className='button' onClick={this.searchWeather}>Search</button>
                    <h3>Country: {sys.country}</h3>
                    <h3>City: {name}</h3>
                    <h4>Temperature: {main.temp} Celsius</h4>
                    <h4>Humidity: {main.humidity}</h4>
                    <h4>Condition: {weather.weather[0].description}</h4>
                </div>
                
            )
        } else if (Object.keys(weather).length === 2) {
            return(
                <div>
                    <h1>Search The Weather by City name</h1>
                    <input className='input' onChange={this.handlerChange} placeholder='Example "Mexico City"' />
                    <button className='button' onClick={this.searchWeather}>Search</button>
                    <h3 style={{color: 'red'}}>Im Sorry I couldn't find the city that you were looking for</h3>
                    <h3>Please try again and make sure that the city exists</h3>
                    
                </div>
                
            )
        }
    }
}

export default Weather