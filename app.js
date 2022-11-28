const express = require("express");
const app = express();
app.set('view engine','ejs');
const https = require('https');
const { send } = require("process");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("resources"));

var items = [];

app.get("/", function(req, res){

    var options = {weekday: 'long', year:'numeric',month:'long', day : 'numeric'};
    var today = new Date();
    var date = today.toLocaleDateString("en-us",options);
    res.render("list", {date: date , newListItems: items});
})

app.post("/",function(req,res){    
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.post("/r",function(req,res){    
    items =[];
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server is running on port 3000")
});