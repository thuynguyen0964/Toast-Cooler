let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");
console.log();

let createToast = function(id){

}

btns.forEach((value)=>{
    value.addEventListener("click", createToast(btns.id));
})