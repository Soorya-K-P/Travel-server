// import express

const express = require('express');

// import cors

const cors = require('cors');

// //import jwt

// const jwt = require('jsonWebtoken')

// import dataservices

const dataServices = require('./services/dataServices')

// create an application using express

const app = express();

// use json parser for server response

app.use(express.json())

// using cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))

// // setup a port number

app.listen(3000,()=>{
    console.log('listening on port:3000');
})

//register request

app.post('/register',(req,res)=>{
    console.log(req.body);
   dataServices.register(req.body.uname,req.body.email,req.body.pswd)
   .then(result=>{
   res.status(result.statusCode).json(result);
   })

})

//login request

app.post('/login',(req,res)=>{
    console.log(req.body);
   dataServices.login(req.body.email,req.body.pswd)
   .then(result=>{
   res.status(result.statusCode).json(result);
})
})

// //Application spesific middleware
// const appMiddileeware = (req, res, next) => {
//     console.log("Application spesific middleware");
//     next();
// }
// app.use(appMiddileeware)

// //Router specific middleware\
// const jwtMiddleware = (req, res, next) => {
// try {
   
//         console.log("Router spesific middleware");
//         const token = req.headers['x-access-token'];
//         const data = jwt.verify(token, 'superkey2022');
//         console.log(data);
//         next();
//     }


// catch{
//    res.status(422).json({
//        statusCode:422,
//        status:false,
//        message:"please login first"
//    })
// }
// }

// //Registration request
// app.post('/register', (req,res) => {
//     console.log(req.body);
//     dataservices.register(req.body.email, req.body.username, req.body.pswd)
//     .then(result=>{
//        res.status(result.statusCode).json(result);
//     }
//     )
//     })


// API call to get all destinations

app.get('/all-destinations',(req,res)=>{
dataServices.getDestinations()
.then(
    result=>{
        res.status(result.statusCode).json(result)
    }
)
})

app.post('/getview',(req,res)=>{
    dataServices.getView(req.body.id)
    .then(result=>{
        res.status(result.statuscode).json(result)

   })
})
app.post('/bookNow',(req,res)=>{
    dataServices.bookNow(req.body.name, req.body.phone, req.body.destination, req.body.totaladults, req.body.children)
    .then(result=>{
        res.status(result.statuscode).json(result)

   })
})


