var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
     'article-one':{
        title:'Article Bat1',
        date:'5th Nov',
        heading:'BatPage',
        content:`
        <p>
        this is a BaTPAGE</p>`
    },
        
     'article-two':{
        title:'Article Bat2',
        date:'5th Nov',
        heading:'BatPage2',
        content:`
        <p>
        this is another BaTPAGE</p>`
    },
        
     'article-three':{
        title:'Article Bat3',
        date:'5th Nov',
        heading:'BatPage3',
        content:`
        <p>
        too many BaTPAGEs</p>`
    }
    
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
 res.sendFile(createTemplate(articles[articleName]));    
});

function createTemplate(data){
    
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`

<html>
<head><title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet"/>
</head>

<body>
    <div class="container">
    <h1>${heading}</h1>
     <div>
        <a href="/">Home</a>
    </div>
    
    <div>
        ${date}
    </div>
    <p>
        ${content}
    </p>
    </div>
</body>
</html>`
;
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
