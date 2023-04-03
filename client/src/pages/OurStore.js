import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from "../components/ProductCard";
import Color from '../components/Color';
import Container from '../components/Container';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../features/products/productSlice';


const OurStore = () => {
  const [grid,setGrid] = useState(4);
  const productState = useSelector((state) => state?.product?.product);
  console.log(productState);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [])
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  return (
    <>
    <Meta title={"Our Store"}/>
    <BreadCrumb title ="Our Store"/>
    <Container class1="store-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card">
                        <h3 className="filter-title">Shop By Categories</h3>
                        <div>
                            <ul className="ps-0">
                                <li>Facial Product</li>
                                <li>Hair product</li>
                                <li>Kid's Store</li>
                                <li>Body Product</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-card">
                        <h3 className="filter-title">Filter By</h3>
                        <div>
                            <h5 className="sub-title">Availability</h5>
                            <div>
                            </div>
                            <div className="check-box">
                                <input className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                />
                                <label className="form-check-label" htmlFor="">
                                    In Stock{1}
                                </label>
                            </div>
                            <div className="check-box">
                                <input className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    checked
                                />
                                <label className="form-check-label" htmlFor="">
                                    Out of stock{0}
                                </label>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className="d-flex align-items-center gap-10">
                                <div class="form-floating">
                                    <input 
                                        type="email" 
                                        className="form-control py-1"
                                        id="floatingInput" 
                                        placeholder="From"
                                    />
                                    <label htmlFor="floatingInput">From</label>
                                </div>
                                <div class="form-floating">
                                    <input 
                                        type="email" 
                                        className="form-control py-1"
                                        id="floatingInput" 
                                        placeholder="To"
                                    />
                                    <label htmlFor="floatingInput">To</label>
                                </div>
                            </div>
                            <h5 className="sub-title">Colors</h5>
                            <div>
                                <div className="d-flex flex-wrap">
                                    <Color/>
                                </div>
                            </div>
                            <h5 className="sub-title">Size</h5>
                            <div>
                            <div className="check-box">
                                <input className="form-check-input" 
                                    type="checkbox" 
                                    id="color-1" 
                                />
                                <label className="form-check-label" htmlFor="color-1">
                                     S&nbsp;(2)
                                </label>
                            </div>
                            <div className="check-box">
                                <input className="form-check-input" 
                                    type="checkbox" 
                                    id="color-2" 
                                />
                                <label className="form-check-label" htmlFor="color-2">
                                     M (2)
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-card">
                        <h3 className="filter-title">Product Tags</h3>
                        <div>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Make Up
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Hair product
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Oils & Serum
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Fragrances
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-card">
                        <h3 className="filter-title">Random Product</h3>
                        <div>
                            <div className="random-products mb-3 d-flex">
                                <div className="w-50">
                                    <img src="images/emali_cerave.JPG" className="img-fluid" alt="watch"/>
                                </div>
                                <div className="w-50">
                                    <h5>
                                    Cerave AM Facial Moisturizing Lotion 52ml
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <b>ksh. 2199</b>
                                </div>
                            </div>
                            <div className="random-products d-flex">
                                <div className="w-50">
                                    <img src="images/emali_bioil.JPG" className="img-fluid" alt="bio-oil"/>
                                </div>
                                <div className="w-50">
                                    <h5>
                                    Bio oil is a specialist skincare oil that helps improve the appearance of scars.
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <b>ksh. 569</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">
                            <p className="mb-0 d-block" style={{"width":"100px"}}>Sort By:</p>
                            <select 
                                className="form-control form-select" 
                                id="">
                                    <option value="best-selling">
                                        Best Seling
                                    </option>
                                    <option value="title-ascending">
                                        Alphabetically,A-Z
                                    </option>
                                    <option value="title-descending">
                                        Alphabetically,Z-A
                                    </option>
                                    <option value="title-ascending">Price, low to high</option>
                                    <option value="title-descending">Price, high to low</option>
                                    <option value="title-ascending">Date,old to new </option>
                                    <option value="title-ascending">Date,new to old</option>
                            </select>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <p className="total-prduct mb-0">21 Products</p>
                            <div className="d-flex align-items-center grid">
                                <img 
                                    onClick={() => {
                                        setGrid(3);
                                    }}
                                    src="images/gr4.svg" 
                                    className="d-block img-fluid" 
                                    alt="grid"
                                />
                                <img
                                     onClick={() => {
                                        setGrid(4);
                                    }}
                                    src="images/gr3.svg" 
                                    className="d-block img-fluid" 
                                    alt="grid"
                                />
                                <img 
                                    onClick={() => {
                                        setGrid(6);
                                    }}
                                    src="images/gr2.svg" 
                                    className="d-block img-fluid" 
                                    alt="grid"
                                />
                                <img 
                                    onClick={() => {
                                        setGrid(12);
                                    }}
                                    src="images/gr.svg" 
                                    className="d-block img-fluid" 
                                    alt="grid"
                                    />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="products-list pb-5">
                        <div className="d-flex flex-wrap gap-10">
                        <ProductCard data={productState ? productState : [] } grid={grid}/>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default OurStore;