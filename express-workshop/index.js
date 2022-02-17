//Load express
const express = require("express");
const { engine } = require('express-handlebars')
const fetch =  require('node-fetch')
const withQuery = require('with-query')

//Create an instance of express application
const app = express();

//serving static files
app.use(express.static(__dirname+'/public'))

// configure express to use hbs
app.engine('hbs',engine({defaultLayout:'default.hbs'}))
app.set('view engine', 'hbs')

//Configure route handlers
//examine request
app.use(
    (req,
     resp,
     next)=>{
        console.info(`${req.method} + ${req.originalUrl}`)
        next();
})

//handle forms
app.get('/customer/:id',
    (req,resp)=>{
        const id = req.params.id;
        resp.status(200).type('text/html');
        resp.send(`<h2>Customer id <code>${id}</code></h2>`)

})

//Handle query strings
app.get('/search',
    (req,resp)=>{
        console.info(req.query)
        const q = req.query.title || 'not set';
        console.info(q)
        resp.status(200).type('text/html');
        resp.send(`<h2>Query string test <code>${q}</code></h2>`)
    })

app.get(['/time'],
    (req,resp)=>{
        resp.status(200).type('text/html');
        resp.send(`<h1> The current time is ${new Date()}</h1>`)
    })

//Handle errors, use will match anything
app.use(
    (req,resp)=>{
        resp.status(404).type('text/html');
        resp.send(`<h2>Not found</h2>`)
})

//Start the web server on port 3000
app.listen(3000, () => {
    console.info(`Webserver started on port 3000 ${new Date()}`);
    console.info(`Express is running is __dirname = ${__dirname}`)
});
