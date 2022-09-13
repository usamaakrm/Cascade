let nav = document.querySelector("nav")

window.onscroll =() =>{
    if(window.scrollY>= 650)
    {
        nav.classList.add("active")
    }
    else {
        nav.classList.remove("active")
    }

}


// gallery item filter

// const filterButtons = document.querySelector('filter.btns').children;
// const item = document.querySelector('portfolio-gallery').children;


// for(let i =0; i <filterButtons.length; i++){
//     filterButtons[i].addEventListener("click",function (){
//         for(let j =0; j < filterButtons.length; j++) {
//             filterButtons[j].classList.remove("active")
//         }
//         this.classList.add("active");
//         const target = this.getAttribute("data-target")

//         for(let k = 0; k < item.length; k++) {
//             item[k].style.display = "none";
//             if (target == item[k].getAttribute("data-id")) {
//                 item[k].style.display = "block";
//             }
//         }
//     })
// }