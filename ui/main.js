
window.onload = function(){
    console.log('Loaded!');
    var heading=document.getElementById('heading');
    document.getElementById('content').style.display = 'none';
heading.onmouseover=function(){mouseOver()};

heading.onmouseout=function(){
    heading.style.color="black";
    
};

heading.onclick=function(){
 heading.style.fontSize = "medium";
 document.getElementById('content').style.fontSize="xx-large";
 document.getElementById('content').style.display = 'inline';
};

   
    
   /* marginLeft=marginLeft+10;
    heading.style.marginLeft=marginLeft+'px';*/

function mouseOver(){
    heading.style.color="yellow";
}

};