var filter = document.querySelector('.filter i');
var leftSideBar = document.getElementsByClassName('leftSideBar')[0];
var barClose = document.querySelector('.barClose i');
    

filter.addEventListener("click",()=>{
    leftSideBar.style.display="block";
    setTimeout(()=>{
        leftSideBar.style.left="0%";
        leftSideBar.style.opacity=1;
    },1)
})
barClose.addEventListener("click",()=>{
        leftSideBar.style.left="-70%";
        leftSideBar.style.opacity=0;
        setTimeout(()=>{
            leftSideBar.style.display="none";
        },100)
        
})