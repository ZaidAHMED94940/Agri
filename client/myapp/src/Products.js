import onion from './images/onion.jpg';
import potato from './images/potato.jpg';
import ladyfinger from './images/ladyfinger.jpg';
import cauliflower from './images/cauliflower.jpg';
import tomatoes from './images/tomatoes.jpg';
import brinjal from './images/brinjal.jpg';
import cucumber from './images/cucumber.jpg';
import cabbage from './images/cabbage.jpg';
import carrot from './images/carrot.jpg';
import chillies from './images/chillies.jpg';
import corn from './images/corn.jpg';
import Peas from './images/Peas.jpg';
const Products = () => {
    return (
        <div className="Products">
            <div className="first">
                <h1 className="titlep">Products</h1>
            </div>
            <div className="second">
                <h2 className="welc">Welcome to Agrigrow</h2></div>
            <div className="cardgrid">
                <div class="card">
                    <img id="onion" src={onion}  />
                    <div class="card-body">
                        <h3 class="card-title">Onion</h3>
                        <h4>RS 35 PER 1KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="potato" src={potato}  />
                    <div class="card-body">
                        <h3 class="card-title">Potato</h3>
                        <h4>RS 30 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={ladyfinger}  />
                    <div class="card-body">
                        <h3 class="card-title">Ladyfinger</h3>
                        <h4>RS 90 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="cauliflower" src={cauliflower}  />
                    <div class="card-body">
                        <h3 class="card-title">Cauliflower</h3>
                        <h4>RS 80 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className="cardgrid">
                <div class="card">
                    <img id="potato" src={tomatoes} />
                    <div class="card-body">
                        <h3 class="card-title">Tomatoes</h3>
                        <h4>RS 150 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={brinjal}  />
                    <div class="card-body">
                        <h3 class="card-title">Brinjal</h3>
                        <h4>RS 120 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={cucumber}  />
                    <div class="card-body">
                        <h3 class="card-title">Cucumber</h3>
                        <h4>RS 100 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={cabbage}  />
                    <div class="card-body">
                        <h3 class="card-title">Cabbage</h3>
                        <h4>RS 140 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className="cardgrid">
                <div class="card">
                    <img id="onion" src={carrot}  />
                    <div class="card-body">
                        <h3 class="card-title">Carrot</h3>
                        <h4>RS 70 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="potato" src={chillies}  />
                    <div class="card-body">
                        <h3 class="card-title">Green Chillie</h3>
                        <h4>RS 130 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="onion" src={corn}  />
                    <div class="card-body">
                        <h3 class="card-title">Corn</h3>
                        <h4>RS 200 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
                <div class="card">
                    <img id="potato" src={Peas}  />
                    <div class="card-body">
                        <h3 class="card-title">Peas</h3>
                        <h4>RS 200 PER KG</h4>
                        <button id="cartbutton">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;