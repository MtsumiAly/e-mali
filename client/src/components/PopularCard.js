import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from 'react-router-dom';

const PopularCard = (props) => {
    const {grid} = props;
    let location = useLocation();
  return (
    <>
    <div className={` ${location.pathname == "/product" ? `gr-${grid}`:"col-3"}`}>
        <Link to="/product:id"className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                <img src="/images/wish.svg" alt="wishlist"/>
                </button>
            </div>
            <div className="product-image">
                <img src="/images/dovebaby_body.JPG"
                    className="img-fluid"
                    alt="product image"
                />
                <img src="/images/garnier_hydrabomb.jpg"
                    className="img-fluid"
                    alt="product image"
                />
            </div>
            <div className="product-details">
                <h4 className="brand">Dove Body Wash</h4>
                <h5 className="product-title">
                Dove Baby Head to Toe Wash- Sensitive 200ml
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
                CREME Of Nature Sulphate Free Moisture & Shine Shampoo helps maintain your hair 
                with a full range of hair care products that nourish and rejuvenate all hair types.
                This sulfate-free formula hydrates hair and adds Exotic Shine,
                while gently cleansing without harsh moisture stripping agents. 
                It strengthens hair while optimizing the moisture balance of the hair and scalp.
                </p>
                <p className="price">Ksh 889.00</p>
            </div>
            <div className="action-bar position-absolute">
               <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                <img src="/images/prodcompare.svg" alt="compare"/>
                </button>
                <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view"/>
                </button>
                <button className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="add-cart"/>
                </button>
                </div>
            </div>
        </Link>
    </div>
    <div className={` ${location.pathname === "/product" ? `gr-${grid}`:"col-3"}`}>
        
        <Link to="/product:id"     className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src="/images/wish.svg" alt="wishlist"/>
                </Link>
            </div>
            <div className="product-image">
                <img src="/images/nivea_shower.JPG"
                    className="img-fluid"
                    alt="product image"
                />
                <img src="/images/garnier_hydrabomb.jpg"
                    className="img-fluid"
                    alt="product image"
                />
            </div>
            <div className="product-details">
                <h4 className="brand">Nivea Shower Gel</h4>
                <h5 className="product-title">
                Nivea Men Deep Shower Gel 500ml
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
                CRÈME OF NATURE Detangling & Conditioning Shampoo with Coconut Milk Nourishes 
                and hydrates your hair with a rich formula that is infused with moisture-rich certified natural ingredients. 
                The Coconut Milk detangles and conditions, the Mango & Shea Butter is ultra moisturising 
                and the Acai Berry & Keratin strengthens and repairs your hair while adding shine..
                </p>
                <p className="price">Ksh 750.00</p>
            </div>
            <div className="action-bar position-absolute">
               <div className="d-flex flex-column gap-15">
                <Link>
                <img src="/images/prodcompare.svg" alt="compare"/>
                </Link>
                <Link>
                <img src="/images/view.svg" alt="view"/>
                </Link>
                <Link>
                <img src="/images/add-cart.svg" alt="add-cart"/>
                </Link>
                </div>
            </div>
        </Link>
    </div>
    </>
  );
};

export default PopularCard;