import { React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { addNewBlogCategory, getABlogCategory, updateABlogCategory } from '../features/bcategory/bcategorySlice';

let schema = yup.object().shape({
  title: yup.string().required("Blog Category Is Required"),
});

const AddblogCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const categoryId = location.pathname.split("/")[3];
  
  const BlogCategoryState = useSelector((state) => state?.blogcategory);
  const { isSuccess, isError, isLoading, message, blogCategory } = BlogCategoryState;
  useEffect(() => {
    if (categoryId !== undefined) {
      dispatch(getABlogCategory(categoryId));
    } else {
      formik.resetForm();
    }
  }, [categoryId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogCategory.title || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (categoryId !== undefined) {
        const data = { id: categoryId, BlogCategoryData: values };
        dispatch(updateABlogCategory(data));
      } else {
        dispatch(addNewBlogCategory(values));
      }
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/blog-categories");
        }, 500);
    },
  });

  useEffect(() => {
    if (isSuccess && message == "New Blog Category Added Successfully") {
      toast.success("Blog Category Added Successfully!");
    }
    if (isSuccess && message === "Blog Category Updated Successfully") {
      toast.success("Blog Category Updated Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading, message]);

  
  return (
    <div>
        <h3 className="mb-4" title="true">
        {categoryId !== undefined ? "Edit" : "Add"} Blog Category
        </h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput 
                  type="text"
                  name="title"
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  value={formik.values.title}
                  label="Enter Blog Category"
                />
                <div className='error-text'>
                  {formik.touched.title && formik.errors.title}
                </div>
                <button 
                    className="btn btn-success border-0 rounded-3 my-5" 
                    type="submit">
                    {categoryId !== undefined ? "Edit " : "Add "}
                    Blog Category
                </button>
            </form>
        </div>
    </div>
  );
};

export default AddblogCategory;