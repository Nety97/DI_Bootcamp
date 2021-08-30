import React from 'react';
import '../MyApp.css'
import logo from '../Trollface.png'


class Header extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <header>
                    <img src={logo} alt='Logo, Trollface'></img>
                    <p>Meme Generator</p>
                </header>
            </div>
        )
    }
}

export default Header