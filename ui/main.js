
window.onload = function(){
    console.log('Loaded!');
    var heading=document.getElementById('heading');
heading.onmouseover=function(){mouseOver()};

heading.onmouseout=function(){
    heading.style.color="black";
    
};

heading.onclick=function(){
 var interval=setInterval(blink,100);
};
var marginLeft=0;
function blink(){
   /* heading.style.fontSize = "large";
    setTimeout(function() {}, 1000);
    heading.style.fontSize="small";*/
    marginLeft=marginLeft+10;
    heading.style.marginLeft=marginLeft+'px';
}
function mouseOver(){
    heading.style.color="yellow";
}
};