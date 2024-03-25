var typed = new Typed(".text-animation",{
    strings:['Web Developer','Frontend Developer','Java Full stack Developer'],
typeSpeed:35,
backSpeed:35,
loop:true,
startDelay:600,
backDelay:500
});
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }
    else{
      entry.target.classList.remove("show-items");
    }
  });
});
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-Top");
scrollTop.forEach((el)=>observer.observe(el));

let menuBar = document.querySelector("#menu-icon");
let barIcon = document.querySelector(".fa-bars");
let navBar = document.querySelector(".nav-links");

menuBar.onclick = () => {
    barIcon.classList.toggle("hidden");
    barIcon.classList.toggle("fa-bars");
    barIcon.classList.toggle("fa-xmark");
    navBar.classList.toggle("open");
};

window.onscroll = () => {
    if (navBar.classList.contains("open")) {
        barIcon.classList.remove("fa-xmark");
        barIcon.classList.add("fa-bars");
        navBar.classList.remove("open");
    }
};
