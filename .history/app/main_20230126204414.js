let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");

let createToast = function(){
    console.log(id);
}

btns.forEach((value)=>{
    value.addEventListener("click", createToast());
})