
window.onload = function(){
    console.log('Loaded!');
    var heading=document.getElementById('heading');
heading.onmouseover=function(){mouseOver()};

heading.onmouseout=function(){
    heading.style.color="black";
    
};

heading.onclick=function(){
 blink();
};
function blink(){
    heading.style.fontSize = "large";
    setTimeout(function() {}, 100);
    heading.style.fontSize="x";
}
function mouseOver(){
    heading.style.color="yellow";
}
};