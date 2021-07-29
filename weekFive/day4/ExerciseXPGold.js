// //exercise 1
// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()

// 1. first console.log('==SEQUENTIAL START==');
// 2. enter because we call resolveAfter2Seconds function and print
// 3. console.log("starting slow promise"); 
// 4. console.log("slow promise is done");
// 5. slow
// 6. enter the next function resolveAfter1Second and print
// 7. console.log("starting fast promise");
// 8. console.log("fast promise is done");
// 9. fast

// //exercise 2

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)

// 1. 4 seconds happen and concurrentStart get called
// 2. console.log('==CONCURRENT START with await==');
// 3. console.log("starting slow promise");
// 4. console.log("starting fast promise");
// 5. waiting 1 second and then console.log("fast promise is done");
// 6. waiting 2 second and then, console.log("slow promise is done");
// 7. slow
// 8. fast

//exercise 3
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];



// const getData = async function() {
//     const [ users, posts, albums ] = await Promise.all(urls.map(async function (url)  {
//         const [ users1, posts1, albums1 ] = await fetch(url).json()
//         // .then(resp => resp.json())
//     }
//     ));

//     console.log('users', users1);
//     console.log('posta', posts1);
//     console.log('albums', albums1);
//   }
const getData = async function() {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function (url) {
        let a = await fetch(url)
        let b = await a.json()
        return b
        // (resp => resp.json())
    }
    
    ));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
}

getData()
