import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from 'react-router-dom';
const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    return (
    <>
    <div className={` ${location.pathname === "/product" ? `gr-${grid}`:"col-3"}`}>
        <Link to="/product:id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                <img src="/images/wish.svg" alt="wishlist"/>
                </button>
            </div>
            <div className="product-image">
                <img src="/images/garnier_skin_active.jpg"
                    className="img-fluid"
                    alt="product image"
                />
                <img src="/images/garnier_hydrabomb.jpg"
                    className="img-fluid"
                    alt="product image"
                />
            </div>
            <div className="product-details">
                <h4 className="brand">Garnier</h4>
                <h5 className="product-title">
                    Garnier Skin Active Pure Charcoal Black Tissue Face Mask
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
                    Pure Charcoal Black tissue mask is infused
                    with charcoal, known for its excellent absorbing properties
                    and ability to intensely remove  impurities.
                </p>
                <p className="price">Ksh 350.00</p>
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
    <div className={` ${location.pathname === "/store" ? `gr-${grid}`:"col-3"}`}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src="/images/wish.svg" alt="wishlist"/>
                </Link>
            </div>
            <div className="product-image">
                <img src="/images/garnier_skin_active.jpg"
                    className="img-fluid"
                    alt="product image"
                />
                <img src="/images/garnier_hydrabomb.jpg"
                    className="img-fluid"
                    alt="product image"
                />
            </div>
            <div className="product-details">
                <h4 className="brand">Garnier</h4>
                <h5 className="product-title">
                    Garnier Skin Active Pure Charcoal Black Tissue Face Mask
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>
                    Pure Charcoal Black tissue mask is infused
                    with charcoal, known for its excellent absorbing properties
                    and ability to intensely remove  impurities.
                </p>
                <p className="price">Ksh 350.00</p>
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
}

export default ProductCard;
