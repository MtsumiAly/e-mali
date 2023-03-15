import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const SpecialProduct = (props) => {
    const {image, brand, title, rating, price, discountDays, productCount, progress, prevPrice} = props;
    return (
    <div className='col-6 mb-3' >
        <div className='special-product-card'>
            <div className="d-flex justify-content-between">
                <div>
                    <img src={image} className="img-fluid" alt=""/>
                </div>
                <div className="special-product-content">
                    <h5 className="brand">{brand}</h5>
                    <h6 className="title">{title}</h6>
                    <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className="red-p"><p>Ksh</p>{price}</span>&nbsp;<strike>KSh {prevPrice}</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gp-10">
                        <p className="mb-0">
                            <b>{discountDays}</b>days
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className="badge rounded-circle p-2 bg-warning">1</span>
                            <span className="badge rounded-circle p-2 bg-warning">1</span>
                            <span className="badge rounded-circle p-2 bg-warning">1</span>
                        </div>
                    </div>
                    <div className="product-count my-3">
                            <p>Products: 5</p>
                            <div class="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{width:"25%"}}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    </div>
                            </div>
                    </div>
                    <Link className="button">Add to cart</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SpecialProduct;
