import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Resetpassword"}/>
    <BreadCrumb title ="Resetpassword"/>
    <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Reset Password</h3>
                        <form action="" className="d-flex flex-column g-15">
                        <CustomInput 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                         />
                        <CustomInput 
                            type="password" 
                            name="confirmpassword" 
                            placeholder="Confirm Password"
                        />    
                            <div>
                                <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0">Ok</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default Resetpassword;