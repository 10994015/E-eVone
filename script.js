window.addEventListener("scroll", function(){
    const header = document.querySelector("#header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

var imgSlidesImg = document.getElementsByClassName('imgSlidesImg');
var leftBtn = document.getElementsByClassName('fa-chevron-circle-left')[0];
var rightBtn = document.getElementsByClassName('fa-chevron-circle-right')[0];
var dots = document.getElementsByClassName('dots')[0];
var dot = document.getElementsByClassName('dot');
var html = "";
var imgIdx = 0;

rightBtn.addEventListener('click',()=>{
    imgIdx++;
    clearColor();
    if(imgIdx>imgSlidesImg.length-1){
        imgIdx=0;
    }
    for(var i=0;i<imgSlidesImg.length;i++){
        
        imgSlidesImg[i].style.transform="translateX(-"+imgIdx+"00%)";
        
    }
    dot[imgIdx].style.background = "#E66756";
})
leftBtn.addEventListener('click',()=>{
    imgIdx--;
    clearColor();
    if(imgIdx<0){
        imgIdx=imgSlidesImg.length-1;
    }
    for(var i=0;i<imgSlidesImg.length;i++){
        
        imgSlidesImg[i].style.transform="translateX(-"+imgIdx+"00%)";
        
    }
    dot[imgIdx].style.background = "#E66756";
})
for(var d=0;d<imgSlidesImg.length;d++){
    html+='<a href="javascript:;" class="dot dot'+d+'"></a>';
}
dots.innerHTML = html;
console.log(dots.innerHTML);

dot[0].style.background = "#E66756";
function clearColor(){
    for(var c=0;c<imgSlidesImg.length;c++){
        dot[c].style.background="#fff";
    }
}

for(var x=0;x<dot.length;x++){
    dot[x].addEventListener("click",switchImg);
}
function switchImg(){
    clearColor();
    console.log(Number(this.className.substr(7)));
    imgIdx = Number(this.className.substr(7));
    dot[imgIdx].style.background = "#E66756";
    for(var a=0;a<imgSlidesImg.length;a++){
        imgSlidesImg[a].style.transform="translateX(-"+imgIdx+"00%)";
    }
}

setInterval(()=>{
    imgIdx++;
    if(imgIdx>imgSlidesImg.length-1){
        imgIdx=0;
    }
    for(var t=0;t<imgSlidesImg.length;t++){
        imgSlidesImg[t].style.transform="translateX(-"+imgIdx+"00%)";
        
    }
    clearColor();
    dot[imgIdx].style.background = "#E66756";
},10000)