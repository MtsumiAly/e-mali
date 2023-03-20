import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
    <header className="header-top-strip py-1">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <p className="text-white mb-0">
                     Free Delivery For Sale Over KSh3000
                    </p>
                </div>
                <div className="col-6">
                <p className="text-end text-white mb-0">
                    Hotline: <a className="text-white" href="tel:+2547288412288">+2547129857743</a>
                </p>
                </div>
            </div>
        </div>
    </header>
    <header className="header-upper py-3">
        <div className="container.xxl">
            <div className="row align-items-center">
                <div className="col-2">
                    <h2>
                        <Link className="text-white">e-Mali</Link>
                    </h2 >
                </div>
                <div className="col-5">
                    <div className="input-group ">
                    <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Search Product Here..."
                    aria-label="Search Product Here..."
                    aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text p-3" id="basic-addon2">
                    <BsSearch className="fs-6"/>
                    </span>
                </div>
                </div>
                <div className="col-5">
                    <div className="header-upper-links d-flex align-items-center justify-content-between">
                        <div>
                            <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                                <img src="/images/compare.svg" alt='compare'/>
                                <p className="mb-0">
                                Compare <br/> Product
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                                <img src="/images/wishlist.svg" alt='wishlist'/>
                                <p className="mb-0">
                                    Favorite<br/>Wishlist
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                            <img src="/images/user.svg" alt='user'/>
                            <p className="mb-0">
                                Login<br/>My Account
                            </p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                            <img src="/images/cart.svg" alt='cart'/>
                            <div className="d-flex flex-column gap-10">
                                <span className="badge by-white text-white">0</span>
                                <p className="mb-0">$ 0.00</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className="header-bottom py-2">
        <div className="container-xxl">
            <div className="row">
            <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-30">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img src="/images/menu.svg" alt=""/>
                        <span>Shop Categories</span>
                         </button>
                        <ul className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                        >
                        <li>
                            <a className="dropdown-item" href="#">
                                Action</a>
                        </li>
                        <li><a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a>
                        </li>
                        </ul>
                    </div>
                        <div className="menu-links">
                        <div className="d-flex align-items-center gap-15">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/product">Our Store</NavLink>
                            <NavLink to="/blog">Blogs</NavLink>
                            <NavLink to="/Contact">E-mali Support</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </header>
    </>
  );
};

export default Header;
