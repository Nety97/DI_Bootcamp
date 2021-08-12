function getItems() {
    fetch('http://localhost:3000/jojo')
    .then(res => res.json())
    .then(data =>{
        console.log(data)

    })
    .catch(e=>{
        console.log(e)
    })
}
