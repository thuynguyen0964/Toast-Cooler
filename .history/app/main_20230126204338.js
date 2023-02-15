let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");

btns.forEach((value)=>{
    value.addEventListener("click", createToast())
})