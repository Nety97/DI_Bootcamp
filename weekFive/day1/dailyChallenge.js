

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let val = JSON.stringify(params,null ,2 )
console.log(val)

document.write(val)












