
window.onload = function(){
    console.log('Loaded!');
    var heading=document.getElementById('heading');
heading.onclick=function(){mouseOver()};
function mouseOver(){
    heading.style.color="blue";
}
};