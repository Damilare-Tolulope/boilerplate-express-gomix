var express = require("express")
var app = express();

app.get("/json", function(req, res){
  if(process.env.MESSAGE_STYLE==="uppercase"){
    console.log("hi")
    res.json({"message": "HELLO JSON"})
  }
  else{
    res.json({"message": "Hello json"})
  }
});


































 module.exports = app;
