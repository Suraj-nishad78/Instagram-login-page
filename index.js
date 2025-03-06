const express  = require("express");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
dotenv.config();

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Function imported here
const {connectToDb} = require('./config/database')
const instagramRoute = require('./features/login/routes')

app.use('/', instagramRoute)

app.listen(4000, ()=>{
    console.log("Serve is up on 4000");
    connectToDb();
});