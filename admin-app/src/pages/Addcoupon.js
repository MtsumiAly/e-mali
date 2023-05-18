import {React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { addNewCoupon } from '../features/coupon/couponSlice';

let schema = yup.object().shape({
  name: yup.string().required("Coupon Name is Required"),
  expiry: yup.date().required("Coupon Expiry Date is Required"),
  discount: yup.number().required("Coupon Discount is Required"),
});
const Addcoupon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createdCoupon = useSelector((state) => state?.coupon);
  const { isSuccess, isError, isLoading, message } = createdCoupon;
  useEffect(() => {
    if (isSuccess && message == "New Coupon Added Successfully") {
      toast.success("Coupon Added Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    initialValues: {
      title: "",
      expiry: "",
      discount: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addNewCoupon(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/coupons");
        }, 3000);
    },
  });

  return (
    <div>
        <h3 className="mb-4" title="true">Add Coupon</h3>
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
                    Add Coupon
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addcoupon;