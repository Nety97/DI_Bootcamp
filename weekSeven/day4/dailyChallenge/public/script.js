function sendToDB () {
    let firstname = document.getElementById('firstname').value.toLowerCase()
    let lastname = document.getElementById('lastname').value.toLowerCase()
    let mail = document.getElementById('mail').value.toLowerCase()
    let username = document.getElementById('username').value.toLowerCase()
    let password = document.getElementById('password').value.toLowerCase()
    
    console.log(username, password)
    fetch('http://localhost:8080/login',{
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

