function sendToDB () {
    let username = document.getElementById('username').value.toLowerCase()
    let password = document.getElementById('password').value.toLowerCase()
    
    console.log(username, password)
    fetch('http://localhost:8080/data',{
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({firstname,lastname, mail, username, password})
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(e => {
      console.log(e);
    })
}

