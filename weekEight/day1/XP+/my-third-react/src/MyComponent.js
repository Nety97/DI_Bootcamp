
const MyComponent = () =>{
    const mystyle ={
        color: 'white',
        background: 'DodgerBlue',
        padding: '10px',
        fontFamily: 'Arial'
    }
    const mySuperStyles = {
        color: 'yellow',
        fontSize: '16px',
        fontWeight: 'bold',
        border: '1px solid yellow',
        background: 'black',
        padding: '5px',
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '10px'
    }
    return(
        <>
        <header style={{color: 'red', backgroundColor: 'lightblue'}}>Im a Header with style</header>
        <h1>Hello wazzap</h1>
        <h2>I am a component in react</h2>
        <p>Once upon a time in the jungle of Wakanda</p>
        <ul>
            <li>Iron man</li>
            <li>The Avengers</li>
        </ul>
        <img src="https://images.pexels.com/photos/1085186/pexels-photo-1085186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="jungle"></img>
        <header style={mystyle}>Im the second Header with style</header>
        <button style={mySuperStyles}>I'm a stylish button</button>
        <header className='newStyle'>Im the third Header with style but i have my own css page</header>
        </>
    )
}

export default MyComponent;