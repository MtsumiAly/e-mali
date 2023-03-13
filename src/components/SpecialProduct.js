import React from 'react';
import ReactStars from "react-rating-stars-component";
const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/watch.jpg" alt=""/>
                </div>
                <div className="special-product-content">
                    <h5 className="brand">Nitrogena</h5>
                    <h6 className="title">
                        Nitrogena Anti Aging Cream Sp++
                    </h6>
                    <ReactStars 
                    count={5} 
                    size={24} 
                    value="3" 
                    edit={false} 
                    activeColor="#ffd700"
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default SpecialProduct;