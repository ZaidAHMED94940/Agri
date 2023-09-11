var express = require('express') ;
var http = require('http') ;
var app = express() ;
var Connect = require('./configure') ;
const {buyerRouter,buyerProfileRouter,farmerRouter,farmerProfileRouter,farmerProductRouter} = require('./controller') ;
var cors = require('cors') ;
var morgan = require('morgan') ;
var server = http.createServer(app) ;


var corsOptions = {
    origin:"https://localhost:3000" ,
}

app.use(express.json()) ;
app.use(morgan('dev')) ;
app.use(cors(corsOptions)) ;


Connect() ;

app.use("/v1/api/farmers", farmerRouter) ;
app.use("/v2/api/farmersProfile",farmerProfileRouter) ;
app.use("/v3/api/farmersProduct",farmerProductRouter) ;

app.use("/v4/api/buyers", buyerRouter) ;
app.use("/v5/api/buyersProfile",buyerProfileRouter) ;

server.listen(3500 , () => 
{
    console.log(" App launched ") ; 
}
)