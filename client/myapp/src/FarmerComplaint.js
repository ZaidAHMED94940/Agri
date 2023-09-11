import axios from 'axios' ;
import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {message} from 'antd' ;

const FarmerComplaint = () => 
{
    const [farmerFirstName , setFarmerFirstName] = useState('') ;
    const [farmerLastName , setFarmerLastName] = useState('') ;
    const [farmerAge, setFarmerAge] = useState('') ;
    const [farmerComplaintName, setFarmerComplaintName] = useState('') ;
    const [farmerComplaintCause, setFarmerComplaintCause] = useState('') ;
    const [farmerComplaintProof, setFarmerComplaintProof] = useState('') ;

    var navigate = useNavigate() ;

    const handleFarmerComplaint = (e) => 
    {
        e.preventDefault() ;
        try 
        {
            var postComplaintResponse = axios.post("http://localhost:3500/v2/api/farmersProfile/postFarmerProfile",
            {
                farmerFirstName:farmerFirstName ,
                farmerLastName:farmerLastName ,
                farmerAge:farmerAge ,
                farmerComplaintName:farmerComplaintName ,
                farmerComplaintCause:farmerComplaintCause ,
                farmerComplaintProof:farmerComplaintProof
            }
            )
            console.log(postComplaintResponse) ;
            if(postComplaintResponse.data && postComplaintResponse.data.success)
            {
                message.success("Successfully posted your complaint") ;
                // navigate("/HomepageFarmer") ;
                window.location.href="/HomepageFarmer" ;
            }
        } 
        catch(error)
        {
            console.log(error) ;
            message.error("Server side error occured") ;
        }

    }
    return (
        <div className = "FarmerComplaint">
          <div className = "productHeading">
                Enter your personal details
          </div>
        <br/>
    <form onSubmit={handleFarmerComplaint}>
        <div className="registerForm">
       <input
        type="text"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your first name"
        required="true"
        value={farmerFirstName}
        onChange={(e) => setFarmerFirstName(e.target.value)}
       />
       <br/>
       <br/>
       <input
        type="text"
        id="exampleInputEmail1"
        className="registerInputImage"
        placeholder="Enter your last name"
        required="true"
        value={farmerLastName}
        onChange={(e) => setFarmerLastName(e.target.value)}
       />
       <br/>
       <br/>
       <input
        type="number"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your age"
        required="true"
        value={farmerAge}
        onChange={(e) => setFarmerAge(e.target.value)}
       />
       <br/>
       <br/>
       <input
        type="text"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter the buyer name"
        required="true"
        value={farmerComplaintName}
        onChange={(e) => setFarmerComplaintName(e.target.value)}
       />
       <br/>
       <br/>
       <input
        type="text"
        className="registerInput"
        id="exampleInputEmail1"
        placeholder="Enter your complaint cause"
        required="true"
        value={farmerComplaintCause}
        onChange={(e) => setFarmerComplaintCause(e.target.value)}
       />
       <br/>
       <br/>
       <p className = "midPara">Enter images supporting complaint</p>
       <input
        type="file"
        className="registerInput"
        id="exampleInputEmail1"
        label="Enter images supporting complaint"
        required="true"
        value={farmerComplaintProof}
        onChange={(e) => setFarmerComplaintProof(e.target.value)}
       />
       <br/>
       <br/>
       <button type="submit" class="pageButton">Submit</button>
     </div>
  </form>
       </div>
    )
}

export default FarmerComplaint ;