import {React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { addNewCategory, getAProductCategory, updateAProductCategory } from '../features/pcategory/pcategorySlice';

let schema = yup.object().shape({
  title: yup.string().required("Category Name is Required"),
});

const Addcategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const categoryId = location.pathname.split("/")[3];
  const createdPCategory = useSelector((state) => state?.pcategory);
  const { isSuccess, isError, isLoading, message, Pcategory } = createdPCategory;
  useEffect(() => {
    if (categoryId !== undefined) {
      dispatch(getAProductCategory(categoryId));
    } else {
      formik.resetForm();
    }
  }, [categoryId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: Pcategory || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (categoryId !== undefined) {
        const data = { id: categoryId, productCategoryData: values };
        dispatch(updateAProductCategory(data));
      } else {
        dispatch(addNewCategory(values));
      }
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/categories");
        }, 5000);
    },
  });


  useEffect(() => {
    if (isSuccess && message == "New Category added successfully") {
      toast.success("Category Added Successfully!");
    }
    if (isSuccess && message === "Successfully Updated The Product Category") {
      toast.success("This Product Category Has Been Updated Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading, message]);


  return (
    <div>
        <h3 className="mb-4" title="true">
        {categoryId !== undefined ? "Edit" : "Add"} Category</h3>
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
                    {categoryId !== undefined ? "Edit " : "Add "}
                    Category
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addcategory;