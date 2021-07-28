const prom = Promise.resolve(90)


var prom2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
    // reject() // active me to catch the error on Promise.all
  });
const prom3 = Promise.resolve(26)

const prom4 = new Promise(resolve => setTimeout(resolve, 4000, "how"));

const prom5 = new Promise(resolve => setTimeout(resolve, 2500, "success"));

function checkPromises(array) {


    Promise.all(array)
    .then(values => console.log(values))
    .catch(err => console.log(err, "there is some error"))
}
checkPromises([prom, prom2, prom3, prom4, prom5])




