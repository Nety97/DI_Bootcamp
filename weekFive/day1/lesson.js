let btn = document.forms[0]
console.log(btn)
btn.addEventListener("submit", takeValue)
let userN = document.getElementById("username")
console.log(userN.value)
function takeValue(e) {
    if (userN.value.length < 4) {
        alert("Username too short")
        e.preventDefault();
        // return false;
    }
}

// ----------------------
// GET
// ----------------------
const urlSearchParams = new URLSearchParams(window.location.search);
// console.log(urlSearchParams) //returns A URLSearchParams object instance.
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params)
//The URLSearchParams interface defines utility methods to work 
//with the query string of a URL.
// URLSearchParams.entries()
// Returns an iterator allowing iteration through 
// all key/value pairs contained in this object.
// console.log(window.location.search); //return an object
//The Window.location read-only property returns a Location 
// object with information about the current location of the document.

let table = document.createElement("table")
let tr = document.createElement("tr");

// let results = document.getElementById("results");
for (const [key, value] of Object.entries(params)) {
    // let tr2 = document.createElement("tr")
    let th = document.createElement("th");
    let td = document.createElement("td");
    th.textContent = key;
    td.textContent = value;
    tr.appendChild(th);
    tr.appendChild(td);
    table.appendChild(tr);
    // table.appendChild(tr2)

}
console.log(table)

let jsonObject = '{"result":true, "count":42}'
console.log(jsonObject)
let kk = JSON.parse(jsonObject)
console.log(kk)
let pp = JSON.stringify(kk)
console.log(pp)

let jsonObj = '{"name": "jose", "age": 67}'
let jj = JSON.parse(JSON.stringify(jsonObj))
console.log(jj, typeof(jj))
