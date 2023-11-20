let img = document.querySelector('.shose');

function shoses(shose){
    img.src = shose;
}






let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}









let span = document.querySelector(".up");

window.onscroll = function () {
this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0 ,
        behavior: "smooth",
    });
};