var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const products = require('./model')

const port = 3000;
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(port,(req,res)=>{
    console.log("port running successfully on " ,port);
})
mongoose.connect("mongodb://localhost:27017" ,{ useNewUrlParser: true ,useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    console.log("MongoDB connection error")
})
app.get('/',(req,res)=>{
    products.find((err,data)=>{
        if(err){
            res.json("Due to server error we could not fetch the data");
        }
        else{
            res.send(data);
        }
    })
});
app.post('/',(req,res)=>{
    if(mongoose.Types.ObjectId.isValid(req.body.id)){
        console.log(req.body.name);
       products.findOne({_id:req.body.id},(err,data)=>{
           data.name=req.body.name,
           data.price=req.body.price,
           data.description=req.body.description,
           data.category=req.body.category
           res.json("Data edited successfully");
           data.save(); 
       })
        
    }
    else{
    let product = new products({
        name:req.body.name,
        price: req.body.price,
        description:req.body.description,
        category:req.body.category,
    })
    product.save(err=>{
        if(err){
            res.json("Your data was not enter due to server problem. Please try again");
            console.log("Data was not saved due to this error" ,err);
        }
        else{
            res.json("Data successfully entered");
            console.log("Data was successfully saved");

        }
    })}
});
app.put('/',(req,res)=>{
    console.log(req.body)


   products.findByIdAndRemove(req.body._id,(err,result)=>{
        if(err){
            res.json("Due to server inconvenience the data was unable to be deleted");
            console.log("The error is",err);
        }
        else{
            console.log(result);
            res.json("Data successfully deleted");
            console.log("Data successfully deleted");
        }
    })
})