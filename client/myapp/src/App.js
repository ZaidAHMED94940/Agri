import logo from './logo.svg';
import './App.css';
import Account from './Account' ;
import Complaint from './Complaint' ;
import Homepage from './Homepage' ; 
import Login from './Login' ;
import NewProduct from './NewProduct' ;
import Products from './Products' ;
import Register from './Register' ; 
import UserAccount from './UserAccount';
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
import HomepageFarmer from './HomepageFarmer';
import FarmerComplaint from './FarmerComplaint';
import Buyers from './Buyers';
import BuyerRegister from './BuyerRegister';
import BuyerLogin from './BuyerLogin';
 
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
               <Route path = "/Account" element = {<Account/>}/>
               <Route path = "/Complaint" element = {<Complaint/>}/>
               <Route path = "/" element = {<Homepage/>}/>
               <Route path = "/Login" element = {<Login/>}/>
               <Route path = "/NewProduct" element = {<NewProduct/>}/>
               <Route path = "/Products" element = {<Products/>}/>
               <Route path = "/Register" element = {<Register/>}/>
               <Route path = "/UserAccount" element = {<UserAccount/>}/>
               <Route path = "/HomepageFarmer" element = {<HomepageFarmer/>}/>
               <Route path = "/FarmerComplaint" element = {<FarmerComplaint/>}/>
               <Route path = "/Buyers" element = {<Buyers/>}/>
               <Route path = "/BuyerRegister" element = {<BuyerRegister/>}/>
               <Route path = "/BuyerLogin" element = {<BuyerLogin/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
