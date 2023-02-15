let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");

let createToast = function(id){
    let toast = document.createElement("l")
}

btns.forEach((value)=>{
    value.addEventListener("click", ()=> {
        createToast(value.id)
    });
})