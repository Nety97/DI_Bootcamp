// exercise 1
// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

(async () =>{
    let dat = await fetch("https://swapi.dev/api/starships/9/");
    let dat2 =  await dat.json()
    console.log(dat2)
})()

// exercise 2 
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// 1. the console.log() in the line 22 its gonna be called and print 'calling'
// 2. we are gonna wait 2 seconds
// 3. and then the console.log() on line 24 its gonna be called and print 'resolved'