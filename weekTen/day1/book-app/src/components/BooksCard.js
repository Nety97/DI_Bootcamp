import React from 'react';
import Cards from './Cards';

class BooksCard extends React.Component{
    constructor(){
        super();
        this.state = {
            searchBooks: '',
            arrBooks: []
        }
    }

    handlerChange = (e) => {
        this.setState({searchBooks: e.target.value})
        // this.getBooks() //if i want to fetch every word
    }
    getBooks = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchBooks}&key=AIzaSyBW9jUwCb66TUhgQ9O_jqYSnliQqwF4pT4`)
        .then(res => res.json())
        .then(res => {
            // if (!res.items.length === 0) {
                this.setState({arrBooks: res.items})
            // }
        })
        .catch(err => console.log(err))
    }
    sortBooks = (e)=>{
        let newArr = [...this.state.arrBooks]
        if (e.target.value === 'newest') {
            newArr.sort( (a,b) =>{
                console.log(b.volumeInfo.publishedDate);
                return parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate); 
            })
            this.setState({arrBooks: newArr})
            console.log(newArr);
        } else if (e.target.value === 'oldest'){
            newArr.sort((a,b)=>{
                return a.volumeInfo.publishedDate - b.volumeInfo.publishedDate
            })
            this.setState({arrBooks: newArr})
        } 
    }
    render(){
    
    console.log(this.state.arrBooks);
    let {arrBooks} = this.state
    
        return(
            <div>
                <div style={{marginBottom: '20px'}}>
                    <input className='inp' type='text' onChange={this.handlerChange} placeholder='Example "Harry Poter"'/>
                    <button onClick={this.getBooks}>Search</button>
                    <select style={{marginLeft: '15px'}} onChange={this.sortBooks} id="sort">
                        <option value="sort">Sort</option>
                        <option value="newest" >Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
                    <Cards books={arrBooks}/>
                
            </div>
        )
    }
}

export default BooksCard