import { React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { addNewBlogCategory } from '../features/bcategory/bcategorySlice';

let schema = yup.object().shape({
  title: yup.string().required("Blog Category Is Required"),
});

const AddblogCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBlogCategory = useSelector((state) => state?.blogcategory);
  console.log(newBlogCategory);
  const { isSuccess, isError, isLoading, message } = newBlogCategory;
  useEffect(() => {
    if (isSuccess && message == "New Blog Category Added Successfully") {
      toast.success("Blog Category Added Successfully!");
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
      dispatch(addNewBlogCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/blog-category-list");
        }, 3000);
    },
  });
  return (
    <div>
        <h3 className="mb-4">Add Blog Category</h3>
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
                    Add Blog Category
                </button>
            </form>
        </div>
    </div>
  );
};

export default AddblogCategory;