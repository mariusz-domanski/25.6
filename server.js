var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/', function(req, res, next){
    console.log('Trwa proces logowania przez Google');
    next();
});

app.get('/', function (req, res) {
    res.render('start-app');
});

app.get('/login', function(req, res){
    res.send('Zostałeś poprawnie zalogowany');
})

app.listen(3003);
app.use(function (req, res, next) {
    res.status(404).send('404 Page not found!')
});