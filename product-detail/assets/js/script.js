var detailImg = document.getElementsByClassName('detailImg');
var bigImg = document.getElementById('bigImg');
var openCaption = document.getElementsByClassName('openCaption');
var checkCaption = document.getElementById('checkCaption');
var captionClose = document.getElementById('captionClose');
var checkCaptionBack = document.getElementsByClassName('checkCaptionBack')[0];

var openNorm = document.getElementsByClassName('openNorm')[0];
var checkNorm = document.getElementById('checkNorm');
var checkNormBack = document.getElementsByClassName('checkNormBack')[0];
var checkNormClose = document.getElementById('checkNormClose');

var openDeliveryBox = document.getElementsByClassName('openDeliveryBox')[0];
var checkDelivery = document.getElementById('checkDelivery');
var checkDeliveryBack = document.getElementsByClassName('checkDeliveryBack')[0];
var checkDeliveryClose = document.getElementById('checkDeliveryClose');

var groupProdBox = document.getElementsByClassName('groupProdBox');

console.log(document.body.clientWidth);


bigImg.src=detailImg[0].src;
detailImg[0].style.opacity=1;
for(var i=0;i<detailImg.length;i++){
    detailImg[i].addEventListener("click",changeIMG)
}

function changeIMG(){
    clearColor();
    bigImg.src=this.src;
    this.style.opacity=1;
}
function clearColor(){
    for(var x=0;x<detailImg.length;x++){
        detailImg[x].style.opacity = .5;
    }
}

for(var c=0;c<openCaption.length;c++){
    openCaption[c].addEventListener("click",openCaptionBox);
}

function openCaptionBox(){
    checkCaption.style.display = "block";
}

captionClose.addEventListener("click",()=>{
    checkCaption.style.display = "none";
})
checkCaptionBack.addEventListener("click",()=>{
    checkCaption.style.display = "none";
})

openNorm.addEventListener("click",()=>{
    checkNorm.style.display = "block";
})
checkNormBack.addEventListener("click",()=>{
    checkNorm.style.display = "none";
})
checkNormClose.addEventListener("click",()=>{
    checkNorm.style.display = "none";
})

openDeliveryBox.addEventListener("click",()=>{
    checkDelivery.style.display = "block";
})
checkDeliveryBack.addEventListener("click",()=>{
    checkDelivery.style.display = "none";
})
checkDeliveryClose.addEventListener("click",()=>{
    checkDelivery.style.display = "none";
})


if(document.body.clientWidth<=768){
    for(var g=0;g<groupProdBox.length;g++){
        groupProdBox[g].style.width="50%";
    }
}
if(document.body.clientWidth<=500){
    for(var g=0;g<groupProdBox.length;g++){
        groupProdBox[g].style.width="100%";
    }
}