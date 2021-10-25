
const newsletterback = document.querySelector(".newsletterback");
const newsletterTimes = document.querySelector(".newsletter-header .fa-times");
const subnewopen = document.getElementById("subnewopen");

subnewopen.addEventListener("click",()=>{
    let subnewsletter = document.querySelector('.sub-newsletter');
    subnewsletter.style.display = "block";
    setTimeout(()=>{
        subnewsletter.style.opacity = 1;
    },100)     
});
newsletterback.addEventListener("click",subnewclose);
newsletterTimes.addEventListener("click",subnewclose);

   function subnewclose(){
    let subnewsletter = document.querySelector('.sub-newsletter');
    subnewsletter.style.display = "none";
    subnewsletter.style.opacity = 0;
   }
 