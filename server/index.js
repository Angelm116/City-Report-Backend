const bodyParser = require('body-parser');
var express = require('express');
var routes = require('./routes/routes.js');
var cors = require('cors');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

//var port = process.env.PORT || 8080;
var port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Running on ${port}`));