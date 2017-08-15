
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



var button=document.getElementById('counter');
button.onclick=function(){
 
    request.onreadystatechange=function(){
      if (request.readyState === XMLHttpRequest.DONE){
    
        if (request.status===200)
        {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
        
    }
    };
        
}
  ;
  request.open('GET','http://athulpallipurth.imad.hasura-app.io/counter',true);
  request.send(null);
  
   /* marginLeft=marginLeft+10;
    heading.style.marginLeft=marginLeft+'px';*/

function mouseOver(){
    heading.style.color="yellow";
}

};