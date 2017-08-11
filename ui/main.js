
window.onload = function(){
    console.log('Loaded!');
    var heading=document.getElementById('heading');
heading.onmouseover=function(){mouseOver()};
heading.onmouseout=function(){
heading.style.color="black";};
};
function mouseOver(){
    heading.style.color="yellow";
}