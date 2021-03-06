var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
     'article-one':{
        title:'Article Bat1',
        date:'5th Nov',
        heading:'BatPage1',
        back:'https://i.redditmedia.com/wfwGw4dJQBTzDZrYu0S14ZLkXgirfBgYAUDAmNUd3Cc.jpg?w=960&s=c066d28548e68258a2edae1a954e3ce0',
        image:'none',
        content:`
        <p><ol><li>Batman is not perfect.</li><li> He is flawed . He is scared.</li><li> And most of all, he is human.
He wasn't born with any superpower. Nor did any accident give him any.</li><li> He is believable</li></ol></p>`
    },
        
     'article-two':{
        title:'Article Bat2',
        date:'5th Nov',
        heading:'BatPage2',
        back:'https://sh-s7-live-s.legocdn.com/is/image/LEGO/5002423?$PDPDefault$',
        image:'https://sh-s7-live-s.legocdn.com/is/image/LEGO/5002423?$PDPDefault$',
        content:`
        <p>
        <ol><li>He works hard. He fights evil, and instead of whooping their asses he has to fight them, fight them real hard.</li><li>
He is the closest a superhero could be to a common man.</li></ol></p>`
    },
        
     'article-three':{
        title:'Article Bat3',
        date:'5th Nov',
        heading:'BatPage3',
        back:'http://wallpaperhungama.in/wp-content/uploads/79/56/This_City_Is_Mine.jpg',
        
         image:'https://www.pixelstalk.net/wp-content/uploads/2015/12/Batman-HD-Wallpaper.png',
        content:`
        <p><ol><li>He's a silent Guardian. </li><li>A watchful protector.</li><li> <b>A Dark Knight.</b></li></ol>
        </p>`
    }
    
};
var counter=0;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));    
});


app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});

function createTemplate(data){
    
var title=data.title;
var date=data.date;
var heading=data.heading;

var content=data.content;
var back=data.back;
var htmlTemplate=`

<html>
<head><title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet"/>
</head>

<body background="${back}">

    <div class="container">
    
    <h1 ><b>${heading}</b></h1>
     <h4><div>
        <a href="/">Back to Home Page</a>
    </div>
    
    <div>
        ${date}
    </div></h4>
    <p><h2>
        ${content}</h2>
    </p>
    </div>
</body>
</html>`
;
return htmlTemplate;
}







app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
