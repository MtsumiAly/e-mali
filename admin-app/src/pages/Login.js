import React, { useEffect } from 'react';
import {  Link, useNavigate } from "react-router-dom";
import CustomInput from '../components/CustomInput';
import { useFormik } from "formik"
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup";
import { login } from '../features/auth/authSlice';
import '../pages/css/login.css'

const loginSchema = yup.object({
  email: yup.string().email("Email Should be Valid").required("Email Address is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
       dispatch(login(values));
    },
  });
  const userState = useSelector((state) => state.auth);
  console.log(userState);
  useEffect(() => {
    if (userState.user) {
      navigate("admin")
    } else {
      navigate("")
    }
  }, [userState, navigate]);
  
  return (
    <div className="py-5" style={{background:"#ffd333", minHeight:"100vh"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <div className="my-5 bg-white rounded-3 p-4">
              <h3 className="text-center" title>Login</h3>
              <p className="text-center">Login to your Account to continue</p>
              <div className="error text-center">
                {userState.message == "Rejected" ? "You are not an Admin" : ""}
              </div>
              <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput 
                  type="text" 
                  name="email" 
                  label="Email Address" 
                  id="email" 
                  onCh={formik.handleChange("email")}
                  onBl={formik.handleBlur("email")}
                  val={formik.values.email}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput 
                  type="password" 
                  name="password" 
                  label="Password" 
                  id="pass" 
                  onCh={formik.handleChange("password")}
                  onBl={formik.handleBlur("password")}
                  val={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>  
                <div className='mb-3 text-end'>
                  <Link to="forgot-password">
                  Forgot Password?
                  </Link>
                </div>
                <button
                  className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5" 
                  style={{background:"#ffd333"}}
                  type= "submit"
                >   
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
