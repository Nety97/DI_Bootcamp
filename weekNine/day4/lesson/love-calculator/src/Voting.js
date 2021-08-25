import React from 'react'

class Voting extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        };
    }

    sumar(language){
      language.votes++;
      const newLang = [...this.state.languages].sort((a,b)=> b.votes - a.votes)
      this.setState({
        languages: newLang
      })
    }

    render() {
        return(
            <div className="languagess">

            {
            this.state.languages.map((language,i) =>

            <div className="names">

                <div className="votes">{language.votes}</div>

                <div className="name">{language.name}</div>

                <button onClick={this.sumar.bind(this,language)}>Click here</button>
            </div>
             )
            }
            </div>

        )}
    }
     export default Voting;
