// recieving data from local host and using dom print it in the html
// // const createSelectBox = (countries) => {
// //     const root = document.getElementById('root');
// //     const select = document.createElement('select');
// //     root.appendChild(select);

// //     countries.forEach((item, i) => {
// //         let opt = new Option(item.country, item.country_id)
// //         select.appendChild(opt)
// //     });
// // }

// // const getCountries= ()=> {
// //     fetch('http://localhost:3000/getCountries')
// //     .then(res => res.json())
// //     .then(data => {
// //         createSelectBox(data)
// //     })
// //     .catch(e => {
// //         console.log(e)
// //     })

// // }
// // getCountries()


// exercise to send to database

function sendToDB () {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    console.log(username, password)
    fetch('http://localhost:3000/login',{
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({username,password})
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(e => {
      console.log(e);
    })
}




