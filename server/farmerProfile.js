var mongoose = require('mongoose') ;

var farmersProfileSchema = mongoose.Schema(
    {
        farmerFirstName :
        {
            type:String ,
            required:true ,
        } ,

        farmerLastName : 
        {
            type:String ,
            required:true ,
        } ,

        farmerAge : 
        {
            type:Number ,
            required:true ,
        }  ,

        farmerComplaintName :
        {
            type:String ,
            required:true ,
        }  ,

        farmerComplaintCause : 
        {
            type:String ,
            required:true 
        } ,
        farmerComplaintProof :
        {
            type:String ,
            required:true ,
        }

    }
)

if(mongoose.models['farmersProfile'])
{
    return mongoose.model('farmersProfile') ;
}

var farmersProfileModel = mongoose.model('farmersProfile',farmersProfileSchema) ;
module.exports = farmersProfileModel ;