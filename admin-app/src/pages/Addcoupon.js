import {React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { addNewCoupon, getACoupon, updateACoupon } from '../features/coupon/couponSlice';

let schema = yup.object().shape({
  name: yup.string().required("Coupon Name is Required"),
  expiry: yup.date().required("Coupon Expiry Date is Required"),
  discount: yup.number().required("Coupon Discount is Required"),
});
const Addcoupon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const couponId = location.pathname.split("/")[3];
  const createdCoupon = useSelector((state) => state?.coupon);
  const { isSuccess, isError, isLoading, message, coupon } = createdCoupon;
  
  useEffect(() => {
    if (couponId !== undefined) {
      dispatch(getACoupon(couponId));
    } else {
      formik.resetForm();
    }
  }, [couponId])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: coupon.name || "",
      expiry: coupon.expiry || "",
      discount: coupon.discount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (couponId !== undefined) {
        const data = { id: couponId, couponData: values };
        dispatch(updateACoupon(data));
      } else {
        dispatch(addNewCoupon(values));
      }
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/coupons");
        }, 3000);
    },
  });
  
  useEffect(() => {
    if (isSuccess && message == "New Coupon Added Successfully") {
      toast.success("Coupon Added Successfully!");
    }
    if (isSuccess && message === "Successfully Updated The Coupon") {
      toast.success("This Coupon Has Been Updated Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading, message]);

  

  return (
    <div>
        <h3 className="mb-4" title="true">
        {couponId !== undefined ? "Edit" : "Add"} Coupon</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput 
                  type="text" 
                  name="name"
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                  value={formik.values.name}
                  label="Enter Coupon Name"
                />
                <div className='error-text'>
                  {formik.touched.name && formik.errors.name}
                </div>
                <CustomInput 
                  type="date" 
                  name="expiry"
                  onChange={formik.handleChange("expiry")}
                  onBlur={formik.handleBlur("expiry")}
                  value={formik.values.expiry}
                  label="Enter Coupon Expiry Date"
          />
                <div className='error-text'>
                  {formik.touched.expiry && formik.errors.expiry}
                </div>
                <CustomInput 
                  type="number" 
                  name="discount"
                  onChange={formik.handleChange("discount")}
                  onBlur={formik.handleBlur("discount")}
                  value={formik.values.discount}
                  label="Enter Discount Amount"
          />
                <div className='error-text'>
                  {formik.touched.discount && formik.errors.discount}
                </div>
                <button 
                    className="btn btn-success border-0 rounded-3 my-5" 
                    type="submit">
                    {couponId !== undefined ? "Edit " : "Add "}
                     Coupon
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addcoupon;