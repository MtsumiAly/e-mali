import {React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { addNewCategory } from '../features/pcategory/pcategorySlice';

let schema = yup.object().shape({
  title: yup.string().required("Category Name is Required"),
});

const Addcategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createdPCategory = useSelector((state) => state?.pcategory);
  const { isSuccess, isError, isLoading, message } = createdPCategory;
  useEffect(() => {
    if (isSuccess && message == "New Category added successfully") {
      toast.success("Category Added Successfully!");
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
      dispatch(addNewCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/category-list");
      }, 3000);
    },
  });
  return (
    <div>
        <h3 className="mb-4" title>Add Category</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput 
                  type="text" 
                  name="title"
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  value={formik.values.title}
                  label="Enter Category"
                />
                <div className='error-text'>
                  {formik.touched.title && formik.errors.title}
                </div>
                <button 
                    className="btn btn-success border-0 rounded-3 my-5" 
                    type="submit">
                    Add Category
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addcategory;