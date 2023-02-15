let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");

let createToast = function(id){
    let toast = 
}

btns.forEach((value)=>{
    value.addEventListener("click", ()=> {
        createToast(value.id)
    });
})