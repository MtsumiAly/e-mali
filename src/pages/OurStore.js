import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

function OurStore() {
  return (
    <>
    <Meta title={"Our Store"}/>
    <BreadCrumb title ="Our Store"/>
    <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card">
                        <h3 className="filter-title">Shop By Categories</h3>
                        <div>
                            <ul className="ps-0">
                                <li>Watch</li>
                                <li>Tv</li>
                                <li>Camera</li>
                                <li>Laptope</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-card">
                        <h3 className="filter-title">Filter By</h3>
                        <div>
                            <h5 className="sub-title">Availability</h5>
                            <div className="check-box">
                            <input class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                value=""/>
                                <label class="form-check-label" for="">
                                    In Stock{1}
                                </label>
                            </div>
                            <div className="check-box">
                                <input class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                value=""/>
                                <label class="form-check-label" for="">
                                    Out of stock{0}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="filter-card">
                        <h3 className="filter-title">Product Tags</h3>
                    </div>
                    <div className="filter-card">
                        <h3 className="filter-title">Random Product</h3>
                    </div>
                </div>
                <div className="col-9"></div>
            </div>
        </div>
    </div>
    </>
  );
};

export default OurStore;