let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");
let toastDetails = {
    time : 5000,
    success : {
        icon: "fa-solid fa-circle-check",
        title : "success",
        text : "This is a success toast!!!"
    },
    error : {
        icon: "fa-solid fa-triangle-exclamation",
        title : "error",
        text : "This is a error toast!!!"
    },
    infor : {
        icon: "fa-solid fa-circle-info",
        title : "infor",
        text : "This is a infor toast!!!"
    },
}
let removeToast = (toast) => {
    toast.classList.add("hidden");
}

let createToast = function(id){
    let {icon, text, title} = toastDetails[id];
    let toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__text">
                        <h4 class="toast__title">${title}</h4>
                        <p class="toast__desc">${text}</p>
                    </div>
                    <div class="icon__close">
                        <i class="fa-solid fa-circle-xmark"></i>
                    </div>`;

    container.appendChild(toast);
    setTimeout(()=> {
        removeToast(toast);
    }, toastDetails.time)
}

btns.forEach((value)=>{
    value.addEventListener("click", ()=> {
        createToast(value.id)
    });
})