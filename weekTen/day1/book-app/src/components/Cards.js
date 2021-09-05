import React from 'react';

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            img: '',
            arrBooks: []
        }
        // this.setState({arrBooks: [...this.props.books]})
    }

    // images = () =>{
    //     if (item.volumeInfo.imageLinks.thumbnail) {
    //         return item.volumeInfo.imageLinks.thumbnail
    //     } else{
    //         return "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337"
    //     }
        
    // }
    render(){
        // console.log(this.props.books);
        // console.log(this.state.arrBooks);
        let {books} = this.props
        let notAvailable = "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337"
        return(
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {books.map((item, index)=>{
                        return <div style={{ width: '260px', fontSize: '22px'}} className='book'  key={index} >
                            
                            {item.volumeInfo.imageLinks === undefined ? (
                                <img style={{height:'310px', width: '200px'}} src={notAvailable} alt='book'/>
                            ) : (
                                <img style={{height:'310px', width: '200px'}} src={item.volumeInfo.imageLinks.thumbnail} alt={`book: ${item.volumeInfo.title}`}/>
                                
                            )}
                            

                            <h4 >{item.volumeInfo.title}</h4>
                            {item.volumeInfo.authors === undefined ? (
                                <div>
                                <p>Author: Not Found</p>
                                </div>
                               
                            ) : (
                                <p>Author: {item.volumeInfo.authors[0]}</p>
                            )}
                            <p>Published: {item.volumeInfo.publishedDate}</p>
                            </div>
                            
                    })}

            </div>
        )
    }
        
    

}

export default Cards