import React from 'react';
import { Link } from 'react-router-dom';
import {BiArrowBack} from "react-icons/bi"
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className="website-name">e-mali pay</h3>
                        <nav 
                            style={{"--bs-breadcrumb-divider": ">"}} 
                            aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link className="text-dark total-price" to="/cart">
                                        Cart
                                    </Link>
                                </li>
                                 &nbsp;/
                                <li className="breadcrumb-item active total-price" aria-current="page">
                                    Information
                                </li>
                                &nbsp;/<li className="breadcrumb-item active">Shipping</li> 
                                &nbsp;/
                                <li className="breadcrumb-item active" aria-current="page">
                                    e-mali pay
                                </li>
                            </ol>
                        </nav>
                        <h4 className="title total">
                            Contact Information
                        </h4>
                        <p className="user-details total">
                            e-Mali Care (emalisupport@gmail.com)
                        </p>
                        <h4 className="mb-3">Shipping Address</h4>
                        <form 
                            action="" 
                            className="d-flex gap-15 flex-wrap justify-content-between" >
                                <div className="w-100" >
                                    <select 
                                        name=""
                                        className="form-control form-select" 
                                        id=""> 
                                        <option value="" selected disabled>
                                            Select Country
                                        </option>   
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input 
                                        type="text" 
                                        placeholder="First Name" 
                                        className="form-control"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <input 
                                        type="text"
                                        placeholder="Last Name" 
                                        className="form-control"
                                     />
                                </div>
                                <div className="w-100">
                                    <input 
                                        type="text"
                                        placeholder="Address" 
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-100">
                                <input 
                                    type="text"
                                    placeholder="Apartment,Road-Links,etc.." 
                                    className="form-control"/>
                                </div>
                                <div className="flex-grow-1">
                                <input 
                                    type="text" 
                                    placeholder="City" 
                                    className="form-control"
                                />
                                </div>
                                <div className="flex-grow-1">
                                    <select 
                                        name=""
                                        className="form-control form-select" 
                                        id="">
                                        <option value="" selected disabled>
                                            Select County
                                        </option>      
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                <input 
                                    type="text" 
                                    placeholder="Postal Code" 
                                    className="form-control"
                                    />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark">
                                            <BiArrowBack className="me-2"/>
                                            Return to Cart
                                        </Link>
                                        <Link to="/product" className="button">
                                            Continue to Shipping
                                        </Link>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
                <div className="col-5">
                    <div className="border-bottom py-4">
                       <div className="d-flex gap-10 mb-2 align-items-center">
                       <div className="w-75 d-flex gap-10">
                            <div className="w-25 position-relative">
                                <span 
                                style={{"top":"-10px" ,right:"2px"}}
                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                    1
                                </span>
                                <img 
                                    className="img-fluid" 
                                    src="https://www.cantubeauty.com/wp-content/uploads/sites/3/2022/04/Cantu_collection_naturalhair-500x500.jpg" 
                                    alt=""
                                />
                            </div>
                            <div>
                                <h5 className="total-price title">Emali watch</h5>
                                <p className="total-price">s #abag68</p>
                            </div>
                        </div>
                        <div className="fle-grow-1">
                            <h5 className="total-price">ks.500.00</h5>
                        </div>
                       </div>
                    </div>
                    <div className="border-bottom py-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="total">Subtotal</p>
                        <p className="total-price">ksh.1000.00</p>
                    </div>  
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="total mb-0">Shipping</p>
                        <p className="total-price mb-0">ksh.1000.00</p>
                    </div> 
                    </div>
                    <div className="border-bottom d-flex justify-content-between align-items-center py-4">
                        <h4 className="total">Total</h4>
                        <h5 className="total-price">ksh.1000.00</h5>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default Checkout;