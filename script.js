window.addEventListener("scroll", function(){
    const header = document.querySelector("#header");
    header.classList.toggle('sticky', window.scrollY > 0);
});
var imgSlidesImg = document.getElementsByClassName('imgSlidesImg');