import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;
const NewProduct = () => 
{
    const [farmerProductName,setFarmerProductName] = useState('') ;
    const [farmerProductImage,setFarmerProductImage] = useState('') ;
    const [farmerProductRate,setFarmerProductRate] = useState('') ;

    var navigate = useNavigate() ;

    const handleNewProduct = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            var postResponse = await axios.post("http://localhost:3500/v3/api/farmersProduct/postFarmerProduct",
            {
                farmerProductName:farmerProductName ,
                farmerProductImage:farmerProductImage ,
                farmerProductRate:farmerProductRate
            }
            ) 
            console.log(postResponse) ;
            if(postResponse.data && postResponse.data.success)
            {
                message.send(" Successfully added your product ") ;
                navigate("/") ;
            }
        } 

        catch(error)
        {
            console.log(error) ;
            message.error(" Server side error occured ") ;
        }
    }

    return (
       <div className = "NewProduct">
        <div className = "productHeading">
                Enter your product details
        </div>
        <br/>
    <form onSubmit={handleNewProduct}>
        <div className="registerForm">
       <input
        type="text"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your product name"
        required="true"
        value={farmerProductName}
        onChange={(e) => setFarmerProductName(e.target.value)}
       />
       <br/>
       <br/>
       <input
        type="number"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your product rate per kg"
        required="true"
        value={farmerProductRate}
        onChange={(e) => setFarmerProductRate(e.target.value)}
       />
       <br/>
       <br/>
       <p className = "midPara">Enter product image</p>
       <input
        type="file"
        id="exampleInputEmail1"
        className="registerInputImage"
        placeholder="Enter image of product"
        required="true"
        value={farmerProductImage}
        onChange={(e) => setFarmerProductImage(e.target.value)}
       />
       <br/>
       <br/>
       <button type="submit" class="pageButton">Add product</button>
     </div>
  </form>
       </div> 
    )
}

export default NewProduct ;