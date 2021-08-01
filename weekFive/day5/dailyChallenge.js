
let btn = document.getElementById('button')
btn.addEvent
btn.addEventListener('click', convert)

let from = document.getElementById('from')
let to = document.getElementById('to')
let money = document.getElementById('finalM')
async function convert() {

    // console.log(from.value)
    
    // console.log(to.value)
    let amount = document.getElementById('amount')
    // console.log(amount.value)
    console.log(from.value)
    let fro = from.value
    let t = to.value
    console.log(fro)
    
    try {
        let a = await fetch('http://api.currencylayer.com/live?access_key=5403178254022c7c9808fab4b75ffa6b')
        let b = await a.json()
        console.log(b.quotes)
        // let firstCurrency = b.quotes[fro] 
        // let secondCurrency = b.quotes[t]
        let finalmulti =  1 / b.quotes[fro] * amount.value * b.quotes[t]  
        money.textContent = finalmulti.toFixed(2) 
    } catch (err) {
        console.log('something went wrong with the page' + err)
    }
    



    fro = ""
    amount.value = ""
}
