// import mongoose

const mongoose = require('mongoose');

// define the connection string

mongoose.connect('mongodb://localhost:27017/travel',()=>{
    console.log('connected to mongodb');
})


// create a model for the destinations

const Destination=mongoose.model('Destination',{
    
    // create schema
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    },
    day:String,
    location:String,
    night:String,

})

const User = mongoose.model('user',
    {
        //schema 
        uname: String,
        email: String,
        pswd: String

    })

const Bookings = mongoose.model('Bookings',
    { 
        name:String, phone:Number, destination:String, totaladults:Number, children:String
    })


module.exports={
    Destination,
    User,
    Bookings
}