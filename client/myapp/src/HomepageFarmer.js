import {Link} from 'react-router-dom' ;
import img1 from './images/farmer1.jpg';
import img2 from './images/Wholesaler.jpg';
const HomepageFarmer = () => 
{ 
    return (
      <div className = "Homepage">
         <header className = "homepageHeader">
            <ul className = "navItems">
                <li className = "itemList">
                <Link to = "/HomepageFarmer" className = "linking">   
                 Home 
                 </Link>
                </li>
                <li className = "itemList">
                <Link to = "/Buyers" className = "linking">   
                 Contact Buyers
                 </Link>
                </li>
                <li className = "itemList">
                <Link to = "/NewProduct" className = "linking">   
                 Add Products  
                 </Link> 
                </li>
                <li className = "itemList">
                <Link to = "/Login" className = "linking">   
                Complaints 
                 </Link>
                </li>
                <li className = "itemList">
                <Link to = "/" className = "linking">   
                 Buyer Mode 
                 </Link>
                </li>
            </ul>
         </header>
         <div className = "farmerMain">
         <div className="farmertext">
         <h1 className="textmid">Welcome to Agrigrow</h1>
         <h1 className="textcenter">CHANGING THE WAY OF AGRICULTURE MANAGEMENT SYSTEM BY CREATING A COMMUNITY BETWEEN FARMER AND RETAILER</h1>
         <button className="buttonclass">Get Started</button> 
         </div>
         </div>
         <div className="Farmerpage">
         <div className="farmercontent">
         <h3 className = "mainHeading">Farmers</h3>
         <h4 className = "mainList">Sell your products at a reasonable price</h4>
         <h4 className = "mainList">Add your new products by just creating an account</h4>
         </div>
         <div className="image">
         <img src={img1} alt="logo" /></div>
         </div>
         <div className="gap">
         <h1 className="hi"> j</h1>
         <div className="Farmerpage">
         <div className="farmercontent">
         <h3 className = "mainHeading">Retailer</h3>
         <h4 className = "mainList">Buy goods by just creating an account</h4>
         <h4 className = "mainList">Can contact with respective farmers</h4>
         </div>
         <div className="image">
         <img src={img2} alt="logo" /></div>
         </div>
         </div>
      </div>  
    )
}

export default HomepageFarmer ;