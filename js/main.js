let hamburger = document.querySelector(".toggle")
// console.log(hamburger);
let menu =  document.querySelector(".menu")
let img = document.querySelector(".gam")

// console.log(menu);
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("dflex")
    if (menu.classList.contains("dflex")){
        img.src="./img/close_black_24dp.svg"
    } 
    else 
    {
        img.src="./img/menu_black_24dp.svg"
    }
})