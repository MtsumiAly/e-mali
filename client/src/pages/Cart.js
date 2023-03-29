import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {AiFillDelete} from "react-icons/ai"
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
    <Meta title={"Cart"}/>
    <BreadCrumb title ="Cart"/>
    <Container class1="cart-wrapper home-wrapper py-5">
            <div className="row">
                <div className="col-12">
                    <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                        <h4 className="cart-col-1">Product</h4>
                        <h4 className="cart-col-2">Price</h4>
                        <h4 className="cart-col-3">Quantity</h4>
                        <h4 className="cart-col-4">Total</h4>
                    </div>
                    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                        <div className="cart-col-1 gap-15 d-flex align-items-center">
                            <div className="w-25">
                                <img 
                                    src="https://www.cantubeauty.com/wp-content/uploads/sites/3/2023/02/CantuMens_FamilyShot_From_To-500x500.jpg"
                                    className="img-fluid"
                                    alt="product_image"
                                />
                            </div>
                            <div className="w-75">
                                <p>EmaliExpress</p>
                                <p>Color:emali</p>
                                <p>Size:M</p>
                            </div>
                        </div>
                        <div className="cart-col-2">
                            <h5 className="price">ksh.899</h5>
                        </div>
                        <div className="cart-col-3 d-flex align-items-center gap-15">
                            <div>
                                <input 
                                    className="form-control" 
                                    type="number" 
                                    name="" 
                                    id=""
                                    min={1}
                                    max={10}
                                 />
                            </div>
                            <div>
                                <AiFillDelete className="text-danger" />
                            </div>
                        </div>
                        <div className="cart-col-4">
                        <h5 className="price">ksh.200.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 py-2 mt-4">
                    <div className="d-flex justify-content-between align-items-baseline">
                    <Link to="/product" className="button" >
                        Continue Shopping 
                    </Link>
                    <div className="d-flex flex-column align-items-end">
                        <h4>SubTotal:ksh.1000.00</h4>
                        <p>Taxes and Shipping Calculated at checkout</p>
                        <Link to="/checkout" className="button">Checkout</Link>
                    </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default Cart;