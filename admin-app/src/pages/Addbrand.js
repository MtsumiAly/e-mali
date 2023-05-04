import {React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { addNewBrand } from '../features/brand/brandSlice';

let schema = yup.object().shape({
  title: yup.string().required("Brand Name is Required"),
});
const Addbrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createdBrand = useSelector((state) => state?.brand);
  const { isSuccess, isError, isLoading, message } = createdBrand;
  useEffect(() => {
    if (isSuccess && message == "New brand added successfully") {
      toast.success("Brand Added Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addNewBrand(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/brand-list");
        }, 3000);
    },
  });

  return (
    <div>
        <h3 className="mb-4" title>Add Brand</h3>
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
                    Add Brand
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addbrand;