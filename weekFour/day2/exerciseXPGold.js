let landscape = function()
{
 let result = "";
 let flat = function(x)
 {
   for(let count = 0; count<x; count++)
   {
     result = result + "_";
   }
 }
 let mountain = function(x)
 {
   result = result + "/"
   for(let counter = 0; counter<x; counter++)
   {
     result = result + "'"
   }
   result = result + "\\"
 }

flat(4);
mountain(4);
flat(4)
return result;
}

console.log(landscape())
// result = "____/''''\\____"
//first we enter the function landscape then we declare a variable and set equal to a empty string
//then we go to the end of the function and and we se the function flat with a number 4 so we enter to the 
//flat function and we see there is a for loop that says add 4 times to result the next string "_" and because the 
//variable result is in the parent scope dont get reset, once we finish adding we go to the next function that is 
//mountain we add to result only 1 time "/" the we see another for loop that run for 4 times add to result 4 times "'"
//once we out of the for loop we see add to result "\\" and then we see enter once more to flat function, so we enter again 
//to the for and add to result 4 times "____" we go out and we return result that should be "____/''''\\____"
//once i run the code i get in the console "____/''''\____" it was strange for me, i run the code in the debugger 
//and i got "____/''''\\____" so i dont know who i have to believe lol, tomorrow i will ask lise :)
