import { React, useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Dropzone from "react-dropzone";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik"
import CustomInput from '../components/CustomInput';
import { deleteImage, uploadImage } from '../features/upload/uploadSlice';
import { fetchBlogCategories } from '../features/bcategory/bcategorySlice';
import { addNewBlog } from '../features/blogs/blogSlice';

const prodSchema = yup.object().shape({
  title: yup.string().required("Blog Title is Required"),
  description: yup.string().required("Blog Description is Required"),
  category: yup.string().required("Blog Category is Required")
});

const Addblog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchBlogCategories());
  }, []);
  const bcategoryState = useSelector((state) => state?.blogcategory?.blogCategories);
  const imageState = useSelector((state) => state?.upload?.images);
  const newBlog = useSelector((state) => state?.blog);
  const { isSuccess, isError, isLoading, message } = newBlog;
  console.log();
  useEffect(() => {
    if (isSuccess && message == "Successfully Added A New Blog" > 0) {
      toast.success("Successfully added a new Blog");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, isLoading ]);


  const img = [];
  imageState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });
  useEffect(() => {
    formik.values.images = img;
  }, [img]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      images: [],
    },
    validationSchema: prodSchema,
    onSubmit: (values) => {
       dispatch(addNewBlog(values));
       formik.resetForm();
       setTimeout(() => {
        navigate("/admin/blog-list");
       }, 3000);
    },
  });
  return (
    <div>
        <h3 className="mb-4" title> Add Blog</h3>
        <div className="">
            <form action="" onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column'>
                <CustomInput 
                  type="text"
                  label="Enter Blog Title"
                  name="title"
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  value={formik.values.title}
                />
                <div className='error-text'>
                  {formik.touched.title && formik.errors.title}
                </div>
                <select 
                  name="" 
                  className="form-control py-3 mb-3 mt-3" 
                  id="" 
                  onBlur={formik.handleBlur("category")}
                  onChange={formik.handleChange("category")}
                  value={formik.values.category}
                >
                    <option value=''>Select Blog Category</option>
                    {bcategoryState.map((item, key) => {
                      return (
                        <option key={key} value={item.title}>
                          {item.title}
                        </option>
                      )
                    })}
                </select>
                <div className='error-text'>
                  {formik.touched.category && formik.errors.category}
                </div>
                <ReactQuill 
                    theme="snow"
                    name="description"
                    onChange={formik.handleChange("description")}
                    value={formik.values.description}
                    placeholder='Enter Blog Description'
                />
                <div className='error-text'>
                  {formik.touched.description && formik.errors.description}
                </div>
                <div className='bg-white border-1 p-5 text-center mt-3'>
                  <Dropzone onDrop={acceptedFiles => dispatch(uploadImage(acceptedFiles))}>
                    {({getRootProps, getInputProps}) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>
                
                <div className='showimages d-flex flex-wrap gap-3'>
                  {
                    imageState?.map((i, j) => {
                      return (
                        <div className='position-relative' key={j}>
                          <button
                          type="button"
                          onClick={() => dispatch(deleteImage(i.public_id))}
                          className='btn-close position-absolute '
                          style={{ top: "10px", right: "10px" }}
                          ></button>
                          <img src={i.url} alt="" width={200} height={200} />
                        </div>
                      );
                    })
                  }
                </div>
                <button 
                    className="btn btn-success border-0 rounded-3 my-5" 
                    type="submit">
                    Add Blog
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addblog;