const app = require('./modules/server')
const routeHome = require('./app/routes/home')(app);
const routeAddNews = require('./app/routes/addnews')(app);
const routeNews = require('./app/routes/news')(app);

app.listen(3000, function(){ 
    console.log("server running")
});