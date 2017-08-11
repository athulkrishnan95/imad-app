
window.onload = function(){
    console.log('Loaded!');
    var heading=document.getElementById('heading');
heading.onmouseover=function(){mouseOver()};

heading.onmouseout=function(){
    heading.style.color="black";
    
};

heading.onclick=function(){
 var interval=setInterval(blink,1000);
};
var marginLeft=0;
function large(){
heading.style.fontSize="x-large";
    
}

function blink(){
   heading.style.fontSize = "small";
    setTimeout(large, 1000);
    
   /* marginLeft=marginLeft+10;
    heading.style.marginLeft=marginLeft+'px';*/
}
function mouseOver(){
    heading.style.color="yellow";
}
};