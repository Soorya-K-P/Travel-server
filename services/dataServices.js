// import db

const db = require('./db');


const getDestinations=()=>{
  return db.Destination.find().then(
        (result)=>{
            if(result){
                return{
                status:true,
                statusCode:200,
                destinations:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Destination not found'
                    }
            }
        }
    )
}

const register=(uname,email,pswd)=>{  
    return db.User.findOne({email}) //data
    .then(user=>{
      if(user){
        return {
          status:'false',
          statusCode:400,
          message:'User already registered'
        }
      }
      else{
        const newUser=new db.User({
          email:email,
          uname,
          pswd:pswd,
         
        })
        newUser.save();      
        return {
          status:'true',
          statusCode:200,
          message:'Register successfull'
        };
        }
      })
    }
  
    const login=(email,pswd)=>{
      return db.User.findOne({email,pswd})
      .then(user=>{
        if(user){
          currentUser=user.uname
          currentemail=email;
          
          return {
            status:'true',
            statusCode:200,
            message:'Login successfull',
            currentUser:currentUser,
            currentemail:email
          }
        }
        else{
          return {
            status:'false',
            statusCode:400,
            message:'Invalid userdetails'
          }
        }
    
      })
    }

const getView = (id) => {
    return db.Destination.findOne({ id })
        .then(
            (result) => {
                if (result) {
                    return {
                        status: true,
                        statuscode: 200,
                        destinations: result
                    }
                }
                else {
                    return {
                        satus: false,
                        statuscode: 404,
                        message: 'No Product Found'
                    }
                }
            }
        )
}

const bookNow = (name, phone, destination, totaladults, children) =>{
  return db.Bookings.find().then(
    (result)=>{
        if(result){

          const Bookings=new db.Bookings({
            name, phone, destination, totaladults, children
           
          })

          Bookings.save()


            return{
            status:true,
            statuscode:200,
            }

        }
        else{
            return{
                status:false,
                statusCode:400,
                message:'error'
                }
        }
    }
)
}
const addtofavourite=(id,title,price,image,description)=>{

  // data added to mongodb --create a model in db.js

  return db.Wishlist.findOne({id}).then(
      (result)=>{
          if(result){
              return{
                  status:true,
                  statusCode:200,
                  message:"Product already exists"
              }
          }
          else{
              const newProduct=new db.Wishlist({id,title,price,image,description})
              newProduct.save()//to save data into mongodb
              return{
                  status:true,
                  statusCode:200,
                  message:"Product added to Wishlist"
              }
          }
      }
  )
}


module.exports={
    getDestinations,
    register,
    login,
    getView,
    bookNow,
    addtofavourite
}