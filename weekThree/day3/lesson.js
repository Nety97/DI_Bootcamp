// let box = document.getElementsByClassName("box")[0]
// // console.log(box)
// let der = 0;
// function move(){
//     setInterval(move,1000)
//     console.log("moviendo")
//     der += 5;
//     // box.style.top = up++ +"2px"
//     box.style.left = der + "px"
//     // box.style.right = right++ +"px"
// }
// let up = 0;

// // function move() {
// //     id = setInterval(function(){
// //       if(left > screenWidth-20)
// //         stop()
// //       left += 5;
// //       // box.style.left = left + 'px';
// //       box.style.left = `${left}px`
// //     },5)
// //   }

const box = document.getElementById('box');
let id;
let left = 0;
let screenWidth = window.screen.availWidth;
function move() {
  id = setInterval(function(){
    if(left > screenWidth-20)
      stop()
    left += 5;
    // box.style.left = left + 'px';
    box.style.left = `${left}px`
  },5)
}
function stop() {
  clearInterval(id)
}