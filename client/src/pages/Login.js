import React from 'react';
import { NavLink, Link } from "react-router-dom";
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Login = () => {
  return (
    <>
    <Meta title={"Login"}/>
    <BreadCrumb title ="Login"/>
    <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Login</h3>
                        <form action="" className="d-flex flex-column g-15">
                            <div>
                                <input
                                    className="form-control" 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mt-1">
                                <input
                                    className="form-control" 
                                    type="password"
                                    name="password" 
                                    placeholder="Password" 
                                />
                            </div>
                            <div>
                                <Link to="/forgot-password">Forgot Password</Link>
                                <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0">Login</button>
                                    <Link className="button signup">SignUp</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Login;