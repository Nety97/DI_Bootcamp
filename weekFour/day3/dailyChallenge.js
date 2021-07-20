let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
let carInventory = [...inventory]

function getCarHonda(carInventory) {
    let firstHonda = carInventory.filter(element => {
        if (element.car_make == "Honda") {
           return `This is a ${element.car_make} ${element.car_model} from ${element.car_year}`
            
        }
        
    })
    
    console.log(firstHonda.shift())   
}
getCarHonda(carInventory);
// best way to do part 1 
let fHonda;
function getHonda(carInventory) {
    let te = carInventory.find(x =>  x.car_make == "Honda")
    console.log(`This is a ${te.car_make} ${te.car_model} from ${te.car_year}`)
    return te
}
console.log(getHonda(carInventory))

//part 2

carInventory.sort(function(x,y){
    return x.car_year - y.car_year
})
console.log(carInventory)


