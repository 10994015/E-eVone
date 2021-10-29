window.addEventListener("scroll", function(){
    const header = document.querySelector("#header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menuBtn = document.getElementsByClassName('menu-btn')[0];
const headerNav = document.getElementsByClassName('headerNav')[0];
const searchBtn = document.querySelector('.searchBtn > i');
const RWDsearchBox = document.getElementsByClassName('RWDsearchBox')[0];


menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
})
searchBtn.addEventListener("click",()=>{
    RWDsearchBox.classList.toggle('active');
})


const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});

