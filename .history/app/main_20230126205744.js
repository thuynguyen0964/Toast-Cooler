let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");
let toastDetails = {
    success : {
        icon: <i class="fa-solid fa-circle-check"></i>
    }
}


let createToast = function(id){
    let toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="icon">
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="toast__text">
                        <h4 class="toast__title">Success</h4>
                        <p class="toast__desc">This is a success toast!!!</p>
                    </div>
                    <div class="icon__close">
                        <i class="fa-solid fa-circle-xmark"></i>
                    </div>`;

    container.appendChild(toast);
}

btns.forEach((value)=>{
    value.addEventListener("click", ()=> {
        createToast(value.id)
    });
})