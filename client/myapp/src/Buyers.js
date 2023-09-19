import food from './images/food.jpg';
import goodfood from './images/goodfood.png'
import agrifood from './images/agrifood1.png'

const Buyers = () => {
    return (
        <div className="Buyers">
            <div className="navabar1">
                <h1 className="navh1">Welcome to Contact Page</h1>
            </div>
            <div className="Buyer">
                <div className="buyercontent">
                <h1>FoodFund International</h1>
                <h2>9203480234</h2>
                <h3>Street:  Apos; Mkt, Shop No.17, Sec 8, Phase Ii, Nr Mgm High School, Nerul</h3>
                <h3>City:Mumbai</h3>
                <h3>State/province/area:Maharashtra</h3>
                <h3>Zip code</h3>                     
                <h3>Country:India</h3>
                </div>
                <div className="image">
                    <img src={food} className="foodimg1"alt="logo" />
                    <div>
                    <button className="bit">Contact Us</button>
                </div>
                </div>
            </div>
            <div className="Buyer">
            <div className="buyercontent1">
            <h1>The GoodFood Co</h1>
            <h2>9203480234</h2>
            <h3>Street:  Apos; Mkt, Shop No.17, Sec 8, Phase Ii, Nr Mgm High School, Nerul</h3>
            <h3>City:Mumbai</h3>
            <h3>State/province/area:Maharashtra</h3>
            <h3>Zip code</h3>                     
            <h3>Country:India</h3>
            </div>
            <div className="image1">
                <img src={goodfood} id="goodfood"className="foodimg1"alt="logo" />
                <div className="button12">
                <button className="bit">Contact Us</button>
            </div>
            </div>
        </div>
        <div className="Buyer">
            <div className="buyercontent1">
            <h1>The GoodFood Co</h1>
            <h2>9203480234</h2>
            <h3>Street:  Apos; Mkt, Shop No.17, Sec 8, Phase Ii, Nr Mgm High School, Nerul</h3>
            <h3>City:Mumbai</h3>
            <h3>State/province/area:Maharashtra</h3>
            <h3>Zip code</h3>                     
            <h3>Country:India</h3>
            </div>
            <div className="image1">
                <img src={agrifood} id="goodfood"className="foodimg1"alt="logo" />
                <div className="button12">
                <button className="bit">Contact Us</button>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Buyers; 