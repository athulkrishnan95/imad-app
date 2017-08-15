
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
var counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
    counter=counter+1;
var count=document.getElementById('count');
count.innerHTML=counter.toString();
    
}
  
   /* marginLeft=marginLeft+10;
    heading.style.marginLeft=marginLeft+'px';*/

function mouseOver(){
    heading.style.color="yellow";
}

};