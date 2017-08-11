console.log('Loaded!');
window.onload = function(){
    var heading=document.getElementById('heading');
heading.onclick=function(){mouseOver()};
function mouseOver(){
    alert('hi');
}
}