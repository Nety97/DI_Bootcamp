// let userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8,
// 		pear : 0.2
// 	}
// };
// userCart["prices"]["pear"]  *=1.17
// userCart["prices"]["apple"] *= 1.17 
// userCart["prices"]["banana"] *= 1.17 

// let chooseFruit = prompt("which fruit you want between Apple, banana or pear?").toLowerCase()
// let userFruitPrice = userCart["prices"][chooseFruit];
// console.log(`you choose ${chooseFruit} and the price is: ${userFruitPrice}`);

// console.log(chooseFruit);
// if (chooseFruit === "apple") {
//     alert("Each "+ chooseFruit + "cost " + priceAppleWithTax)
// }else if(chooseFruit === "banana") {
//     alert("Each "+ chooseFruit + "cost " + priceBananaWithTax)

// } else if(chooseFruit === "pear") {
//     alert("Each "+ chooseFruit + "cost " + pricePearWithTax)

// }else {
//     alert("we dont have that fruit")
// }
// console.log(chooseFruit)



// userCart["username"] = "Josh";
// console.log(userCart);
// console.log(userCart["cart"]["pear"]);
// console.log(userCart["prices"]["pear"]);
// let numberPear = userCart["cart"]["pear"];
// let pricePerPear = userCart["prices"]["pear"];
// let totalPricePear = numberPear * pricePerPear;
// alert(`The pears cost ${totalPricePear} shekels to ${userCart["username"]}`)

let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};



if (userCart["isUserSignedIn"]) {
    console.log(`Hi ${userCart["username"]} your password is: ${userCart["password"]}`)
} else {
    console.log("you need to sign in")
}
/// second exercise

if (userCart["username"] == "John" && userCart["password"] == 1234) {
    console.log("Your are signed in!")
} else if (userCart["username"] == "John" || userCart["password"] === 1234){
    console.log("One credential is false")
} else {
    console.log("you need to sign in")
}