import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Color from '../components/Color';
import Container from '../components/Container';


const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare Products"}/>
    <BreadCrumb title ="Compare Products"/>
    <Container class1="compare-product-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                      <img 
                        src="images/cross.svg" 
                        alt="cross" 
                        className="cross position-absolute img-fluid"
                      />
                      <div className="product-card-image">
                        <img src="images/nivea1.jpg" alt="nivea"/>
                      </div>
                      <div className="compare-product-details">
                        <h5 className="title">
                        Nivea Perfect & Radiant Luminous Anti Dark.
                        </h5>
                        <h6 className="price mb-3 mt-3">ksh 1899.00</h6>
                      </div>
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p>Nivea</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p>Cream & Serum</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color/>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                      <img 
                        src="images/cross.svg" 
                        alt="cross" 
                        className="cross position-absolute img-fluid"/>
                      <div className="product-card-image">
                        <img src="images/Garnier2.jpg" alt="Garnier"/>
                      </div>
                      <div className="compare-product-details">
                        <h5 className="title">
                        Garnier Anti-Blemish Charcoal Serum
                        </h5>
                        <h6 className="price mb-3 mt-3">ksh 1599.00</h6>
                      </div>
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p>Garnier</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p>Charcoal & Serum</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color/>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default CompareProduct;