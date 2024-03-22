
const express = require('express');
const cors=require("cors");
require('./db/config');
const User = require("./db/User");
const Book = require("./db/Book");
const Given = require("./db/Given");
const History = require("./db/History");
const app = express();
// const path = require("path");


app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, './')));

app.post("/register",async (req,resp)=>{
    let user =new User(req.body);
    let result =await user.save();
    resp.send(result);
});

app.post("/login",async (req,resp)=>{
    if(req.body.email&&req.body.password){
        let user =await User.findOne(req.body).select("-password");
        if(user){
        resp.send(user);
        }else{
        resp.send({result:'No User Found'});
        }
    }else{
        resp.send({result:'No User Found'});
    }
    
});

app.post("/collect-info",async (req,resp)=>{
    if(req.body.roll&&req.body.session){
        let info = await Given.findOne(req.body).select();
        if(info){
            resp.send(info);
        }else{
            resp.send({result:'User not exist'});
        }
    }else{
        resp.send({result:'User not exist'});
    }
});

app.post("/history", async(req,resp)=>{
    let product = new History(req.body);
    let result =  product.save();
    resp.send(result); 
});

    app.post("/give", async(req,resp)=>{
        let product = new Given(req.body);
        let result =  product.save();
        resp.send(result); 
    });

    app.post("/add-book", async (req,resp)=>{
        let product = new Book(req.body);
        let result =  product.save();
        resp.send(result);
    });

    app.post("/find-book", async (req,resp)=>{
        if(req.body.bookType&&req.body.sem){
            let book = await Book.findOne(req.body).select("-pages");
            if(book){
                resp.send(book);
            }else{
                resp.send({result:'Book Not Found'});
            }
        }else{
            resp.send({result:"Book Not Found"});
        }
    });

    // app.put("/collect",async (req,resp)=>{
        
    // });

    app.get("/currentstatus", async (req,resp)=> {
        try{
            const allData = await History.find({});
            resp.send({status : "OK", data:allData});
        }catch(error){
            console.log(error);
        }
    });

    app.get("/totalcurrent", async (req,resp)=> {
        try{
            const allData = await Given.find({});
            resp.send({Status:"OK",data:allData});
        }catch(error){
            console.log(error);
        }
    })



app.listen(3000);