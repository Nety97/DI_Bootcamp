const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let val = JSON.stringify(params,null ,2 )
if (val.length > 2) {
    document.write(val)
}












