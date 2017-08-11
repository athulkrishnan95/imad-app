
window.onload = function(){
    console.log('Loaded!');
    var heading=document.getElementById('heading');
heading.onmouseover=function(){mouseOver()};
function mouseOver(){
    heading.style.color="yellow";
}
};