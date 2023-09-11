var mongoose = require('mongoose') ;

var buyerRegisterSchema = mongoose.Schema(
    {
        buyerName :
        {
            type:String ,
            required:true ,
        } ,

        buyerEmail :
        {
            type:String ,
            required:true ,
        } ,

        buyerPassword : 
        {
            type:String ,
            required:true 
        }
    }
)

if(mongoose.models['buyers'])
{
    return mongoose.model('buyers') ;
}

var buyerRegisterModel = mongoose.model('buyers',buyerRegisterSchema) ;
module.exports = buyerRegisterModel ;