const express = require('express');
var bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(upload.array())
app.use(express.static("public"))
app.use(bodyParser.json())
const port  = 8000;
//get request with url query params
// app.get("/",(req, res)=>{
//     const firstname = req.query.firstname;
//     const lastname = req.query.lastname;
//     res.send(firstname + " " + lastname);
//     res.send()
// });
// app.get("/abc", (req, res)=>{
//     const name= req.query.name;
//     const age = req.query.age;
//    res.send(name);
//    res.end(name+age)
// })

// //working with get requset headers
// app.get("/Seventeen", (req, res)=>{
//     const firstName = req.header("firstName");
//     const lastName = req.header("lastName");
//     res.end(firstName+ " "+ lastName);
// })

// //working with post request query
// app.post("/ninety", (req, res)=>{
//    const roll=req.query.roll;
//    const age=req.query.age;
//    res.send(roll+""+age);
//    res.end()
// });

// app.post("/watch", (req, res)=>{
//     const videoId = req.query.videoId;
//     const videoTimeStart = req.query.time;
//     res.send(videoId+" "+videoTimeStart);
//     res.end();
// })

// //post request with headers properties
// app.post("/twenty", (req, res)=>{
//     const userName = req.header("username");
//     const password = req.header("password");
//     res.send("username:"+" "+userName +"password "+" "+password);
//     res.end();
// })

// app.post("/twentys",(req, res)=>{
//     const  userName = req.header("username");
//     const password = req.header("password");
//     const userId = req.header("userid");
//     const userEmail = req.header("useremail");
//     res.send(userEmail+userId+password+userName);
//     res.end()
// });

//post application with json data
app.post("/twentyone", (req, res)=>{
    const jsonData = req.body;
    console.log("This Data comes from client"+jsonData.name)
    const jsonString = JSON.stringify(jsonData);
    res.end(jsonString);
})

//working with multipart form Data
app.post("/twentytwo", (req, res)=>{
    const jsonData = req.body;
    res.send(JSON.stringify(jsonData));
    res.end();
})


app.listen(port, ()=>{
    console.log("server running on", port)
})





// const express = require('express');
// // const multer = require('multer');
// const bodyParser = require('body-parser');

// // const upload = multer();
// const app = express();
// app.use(bodyParser);
// // app.use(upload.array());
// // app.use(express.static('public'))

// app.post("/datapost", (req, res)=>{
//   let jsonData = req.body;
//  res.end("data post successfully"+ jsonData)
// });


// var express=require("express");
// var bodyParser = require("body-parser");
// var multer = require("multer");
// var upload = multer();
// var app = express();

// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true })); 


// app.set('view engine', 'pug');
// app.set('views', './views');

// app.use(upload.array()); 
// app.use(express.static('public'));

// app.get("/", function(req, res){
//     res.send("Form");
//     res.end(req.body)
// })

// app.post("/", function(req, res){
//     console.log(req.body);
//     res.end("recive your request"+req.body);
// })


// app.listen(8080,()=>{
//     console.log("Server running on port 8080")
// })