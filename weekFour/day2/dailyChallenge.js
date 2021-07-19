let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
let groceriesTwo = groceries;

groceries.totalPrice = "35$";
// Yes in the copy also change the totalPrice because we pass the value by reference 
// so if i change on one it will change automatically in the other as we can check on the next console.log
console.log(groceries.totalPrice)
console.log(groceriesTwo.totalPrice)

groceries.other.payed = false;
// as we said i the first example, once i change something in one of the them it will change in both 
// because we are Copying By Reference and the have the same indentity
console.log(groceries.other.payed)
console.log(groceriesTwo.other.payed)