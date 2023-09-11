var mongoose = require('mongoose') ;

var farmersProductSchema = mongoose.Schema(
    {
        farmerProductName :
        {
            type:String ,
            required:true , 
        } ,

        farmerProductImage :
        {
            type:Object ,
            required:true ,
        } ,
        farmerProductRate :
        {
            type:String ,
            required:true ,
        }
    }
)

if(mongoose.models['farmersProduct'])
{
    return mongoose.model('farmersProduct') ;
}

var farmerProductModel = mongoose.model('farmersProduct',farmersProductSchema) ;
module.exports = farmerProductModel ;