let x = "*";

for (let index = 1; index <= 6; index++) {
    console.log(x.repeat(index))
}
// nested loops
for (let index = 1; index <= 6; index++) {
    let y = "";

    for (let two = 0; two < index; two++) {
        y+= "*"
    } 
    console.log(y)

}
