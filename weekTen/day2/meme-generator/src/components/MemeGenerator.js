import React from 'react';
import '../MyApp.css'

class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state = {
            topText: '',
            bottomText: '',
            arrayImg: [],
            randomImg: ''
        }
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => {
            
            this.setState({arrayImg: data.data.memes})
        })
        .catch(err => {
            console.log(err);
        })
    }

    handlerInput = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    randomMeme = (e) => {
        e.preventDefault()
        let num = Math.floor(Math.random() * 100)
        let arr = this.state.arrayImg
        let newImg = arr[num]
        this.setState({randomImg: newImg})
    }

    render(){
        let {topText, bottomText, randomImg} = this.state
        return(
            <div>
                <form className='meme-form'>
                    <input name='topText' onChange={this.handlerInput} placeholder='Top Text'/>
                    <input name='bottomText' onChange={this.handlerInput} placeholder='Bottom Text'/>
                    <button onClick={this.randomMeme}>Gen</button>
                </form>
                <div className='meme'>
                    <img src={randomImg.url} alt={randomImg.name}></img>
                    <h2 className='top'>{topText}</h2>
                    <h2 className='bottom'>{bottomText}</h2>
                </div>
                
                
            </div>
        )
    }
}

export default MemeGenerator