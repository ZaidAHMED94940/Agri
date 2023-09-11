var mongoose = require('mongoose') ;

var buyerProfileSchema = mongoose.Schema(
    {
        buyerBusinessName :
        {
            type:String ,
            required:true ,
        } 
        ,
        buyerFirstName : 
        {
            type:String ,
            required:true ,
        }
        ,
        buyerLastName :
        {
            type:String ,
            required:true ,
        } ,

        buyerAge :
        {
            type:Number ,
            required:true ,
        } ,
        
        buyerComplaintFarmerName :
        {
            type:String ,
            required:true ,
        } ,

        buyerComplaintCause :
        {
            type:String ,
            required:true ,
        } ,

        buyerComplaintProof :
        {
            type:Object ,
            required:true 
        }

    }
)

if(mongoose.models['buyersProfile'])
{
    return mongoose.model('buyersProfile') ;
}

var buyerProfileModel = mongoose.model('buyersProfile',buyerProfileSchema) ;
module.exports = buyerProfileModel ;