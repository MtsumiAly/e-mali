import {React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { addNewBrand, getABrand, updateABrand } from '../features/brand/brandSlice';

let schema = yup.object().shape({
  title: yup.string().required("Brand Name is Required"),
});
const Addbrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const brandId = location.pathname.split("/")[3];
  const createdBrand = useSelector((state) => state?.brand);
  const { isSuccess, isError, isLoading, message, brand } = createdBrand;
  console.log(brandId);
  useEffect(() => {
    if (brandId !== undefined) {
      dispatch(getABrand(brandId));
    } else {
      formik.resetForm();
    }
  }, [brandId])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brand || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (brandId !== undefined) {
        const data = { id: brandId, brandData: values };
        dispatch(updateABrand(data));
      } else {
        dispatch(addNewBrand(values));
      }
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/brands");
        }, 3000);
    },
  });
  useEffect(() => {
    if (isSuccess && message === "New brand added successfully") {
      toast.success("Brand Added Successfully!");
    }
    if (isSuccess && message === "Successfully Updated The Brand") {
      toast.success("This Brand Has Been Updated Successfully!");
    } 
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading, message]);

  

  return (
    <div>
        <h3 className="mb-4" title="true">
          {brandId !== undefined ? "Edit" : "Add"} Brand</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput 
                  type="text" 
                  name="title"
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  value={formik.values.title}
                  label="Enter Brand"
                />
                <div className='error-text'>
                  {formik.touched.title && formik.errors.title}
                </div>
                <button 
                    className="btn btn-success border-0 rounded-3 my-5" 
                    type="submit">
                    {brandId !== undefined ? "Edit " : "Add "}
                     Brand
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addbrand;