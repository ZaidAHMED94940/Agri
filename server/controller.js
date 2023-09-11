var express = require('express') ;

var buyerRegisterModel = require("./registerModelBuyers") ;
var buyerProfileModel = require('./buyerProfile') ;

var farmerRegisterModel = require("./registerModelFarmers") ; 
var farmerProfileModel = require('./farmerProfile') ;
var farmerProductModel = require('./farmerProduct') ;


const handleBuyerRegister = async(req,res) => 
{
    try 
    {
        const {buyerName,buyerEmail,buyerPassword} = req.body ;
        console.log(req.body) ; 
        var prevAccount = await buyerRegisterModel.findOne(
            {
                buyerEmail:req.body.buyerEmail 
            }
        )
        console.log(prevAccount) ;
        if(prevAccount)
        {
            return res.status(200).send({message: " Already an account exists ",success: false}) ;
        }
        else 
        {
            buyerName = req.body.buyerName ;
            buyerEmail = req.body.buyerEmail ;
            buyerPassword = req.body.buyerPassword ;
            var newUser = await new buyerRegisterModel(
                {
                    buyerName , buyerEmail , buyerPassword
                }
            )
            console.log(newUser) ;
            newUser.save({buyerName, buyerEmail, buyerPassword}) ;
            return res.status(201).send({message:"Registration successfull", success:true , newUser}) ;
        }
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Unable to register", success:false}) ;
    }
}



const handleBuyerLogin = async(req,res) => 
{
    try 
    {
        const {buyerEmail,buyerPassword} = req.body ;
        console.log(req.body) ;
        var prevUser = await buyerRegisterModel.findOne(
            {
            buyerEmail:req.body.buyerEmail
            }
        )
        if(!prevUser)
        {
            return res.status(200).send({message:"Invalid email address", success:false}) ; 
        }
        else if(prevUser.buyerPassword !== req.body.buyerPassword)
        {
            return res.status(200).send({message:"Invalid email address or password", success:false}) ;
        }
        else 
        {
            return res.status(201).send({message:"Login successfull",success:true}) ;
        }
    }
    catch(error)
    {
         console.log(error) ;
         return res.status(500).send({message:"Unable to login", success:false}) ;
    }
}



const handleBuyerProfile = async(req,res) => 
{
    try 
    {
        const {buyerBusinessName, buyerFirstName, buyerLastName, buyerAge, buyerComplaintFarmerName, buyerComplaintCause,buyerComplaintProof} = req.body ;
        console.log(req.body) ;
        var newBuyer = await new buyerProfileModel(
            {
                buyerBusinessName , buyerFirstName , buyerLastName, buyerAge, buyerComplaintFarmerName,buyerComplaintCause,buyerComplaintProof
            }
        )
        console.log(newBuyer) ;
        newBuyer.save({buyerBusinessName, buyerFirstName, buyerLastName , buyerAge, buyerComplaintFarmerName, buyerComplaintCause, buyerComplaintProof}) ;
        return res.status(201).send({message:"Successfully saved your data", newBuyer}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Unable to save the profile"}) ; 
    }
}


const handleFarmerRegister = async(req,res) => 
{ 
    {
        try 
        {
         const {farmerName, farmerEmail,farmerPassword } = req.body ;
            console.log(req.body) ;
            var existingUser = await farmerRegisterModel.findOne({farmerEmail : req.body.farmerEmail}) ;
            console.log(existingUser) ;
            if(existingUser)
            {
                return res.status(200).send({message: "User Already Exists" , success:false}) ;
            }
            else 
            { 
              
               const farmerName = req.body.farmerName ;
               const farmerPassword = req.body.farmerPassword ;
               var newUser = await new farmerRegisterModel({
                farmerName,farmerEmail,farmerPassword
                }) ;
               await newUser.save({farmerName,farmerEmail,farmerPassword}) ;
               return res.status(201).send({message:"Successfully saved the new user",success:true}) ;    
               
            }
        }
        catch(error)
        { 
            console.log(error) ;
            return res.status(500).send({message:"Server side error occured",success:false}) ;
        }
   }
}



const handleFarmerLogin = async(req,res) => 
{
    try {
        const {farmerEmail,farmerPassword} = req.body ;
        console.log(req.body) ;
        var existingEmail = await farmerRegisterModel.findOne({farmerEmail:req.body.farmerEmail}) ;
        if(!existingEmail)
        {
             return res.status(202).send({message:"Invalid username", success:false}) ;
        }
        else if(existingEmail.farmerPassword !== req.body.farmerPassword)
        {
             return res.status(203).send({message:"Invalid username or password", success:false}) ;
        }
        else 
        {
            return res.status(200).send({message:"Login success", success:true}) ;    
        }

    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Server side error occured", success:false}) ;
    }
}

const handleFarmerProfile = async(req,res) => 
{
    try {
        const {farmerFirstName,farmerLastName,farmerAge,farmerComplaintName,farmerComplaintCause,farmerComplaintProof} = req.body ;
        console.log(req.body) ;
        var newProfile = await new farmerProfileModel(
            {
                farmerFirstName,farmerLastName,farmerAge,farmerComplaintName,farmerComplaintCause,farmerComplaintProof
            }
        ) ;
        newProfile.save() ;
        console.log(newProfile) ;
        return res.status(200).send({message:"Successfully saved your profile",success:true,newProfile}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Server side error occured",success:false}) ; 
    }
}

const handleNewProduct = async(req,res) => 
{
    try 
    {
        const {farmerProductName, farmerProductImage , farmerProductRate} = req.body ;
        console.log(req.body) ; 
        
        var newProduct = await new farmerProductModel(
            {
                farmerProductName,farmerProductImage,farmerProductRate
            }
        )
        newProduct.save() ;
        console.log(newProduct) ;
        return res.status(201).send({message:"Saved the product details",success:true,newProduct}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Unable to perform post request", success:false}) ;
    }
}


var farmerRouter = express.Router() ;
var farmerProfileRouter = express.Router() ;
var farmerProductRouter = express.Router() ;

var buyerRouter = express.Router() ;
var buyerProfileRouter = express.Router() ;

farmerRouter.post('/postFarmerRegister',handleFarmerRegister) ;
farmerRouter.post('/postFarmerLogin',handleFarmerLogin) ;
farmerProfileRouter.post('/postFarmerProfile',handleFarmerProfile) ;
farmerProductRouter.post('/postFarmerProduct',handleNewProduct) ;

buyerRouter.post('/postBuyerRegister', handleBuyerRegister) ;
buyerRouter.post('/postBuyerLogin', handleBuyerLogin) ;
buyerProfileRouter.post('/postBuyerProfile',handleBuyerProfile) ;

module.exports = {farmerRouter,farmerProfileRouter,farmerProductRouter,buyerRouter,buyerProfileRouter} ;