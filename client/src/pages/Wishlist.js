import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
    <Meta title={"Wishlist"}/>
    <BreadCrumb title ="Wishlist"/>
    <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card  position-relative">
                        <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="cross position-absolute img-fluid"
                        />
                        <div className="wishlist-card-image">
                            <img
                                src="images/emali_nivea.JPG" 
                                className="img-fluid w-100" 
                                alt="watch"
                             />
                        </div>
                        <div className="py-3 px-2">
                            <h5 className="title">
                            2 Pack Nivea Lip Balm Black Berry Shine
                            </h5>
                            <h6 className="price">ksh.799.00</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card  position-relative">
                        <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="cross position-absolute img-fluid"
                        />
                        <div className="wishlist-card-image">
                            <img
                                src="images/emali_acnes.JPG" 
                                className="img-fluid w-100" 
                                alt="watch"
                             />
                        </div>
                        <div className="py-3 px-2">
                            <h5 className="title">
                             2 in 1 Acnes Scar Care 12g
                            </h5>
                            <h6 className="price">ksh. 489.00</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card  position-relative">
                        <img 
                            src="images/cross.svg"
                            alt="cross" 
                            className="cross position-absolute img-fluid"
                        />
                        <div className="wishlist-card-image">
                            <img
                                src="images/emali_aveeno.JPG"
                                className="img-fluid w-100" 
                                alt="aveeno"
                             />
                        </div>
                        <div className="py-3 px-2">
                            <h5 className="title">
                            Aveeno Baby Wash & Shampoo 532ml
                            </h5>
                            <h6 className="price">ksh.2300.00</h6>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default Wishlist;