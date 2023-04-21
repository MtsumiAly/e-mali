import {React, useEffect} from 'react';
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from "formik"
import * as yup from "yup";

const prodSchema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
});


const Addproduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: prodSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values))   
    },
  });
  return (
    <div>
        <h3 className="mb-4" title>Add Product</h3>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <CustomInput 
                  type="text" 
                  label="Enter Product Title"
                  name="title"
                  onCh={formik.handleChange("title")}
                  onBl={formik.handleBlur("title")}
                />
                
                <div>
                  {formik.touched.title && formik.errors.title}
                </div>
                <div className="mb-3">
                <ReactQuill 
                    theme="snow" 
                    // value={desc} 
                    onChange={(evt) => {
                    // handleDesc(evt)
                    ;
                    }} 
                />
                </div> 
                <CustomInput type="number" label="Enter Product Price"/>
                <select name="" className="form-control py-3 mb-3" id="">
                    <option value=''>Select Brand</option>
                </select>
                <select name="" className="form-control py-3 mb-3" id="">
                    <option value="">Select Category</option>
                </select>
                <select name="" className="form-control py-3 mb-3" id="">
                    <option value="">Select Color </option>
                </select>
                <CustomInput type="number" label="Enter Product Price"/>
                <button 
                    className="btn btn-success border-0 rounded-3 my-5" 
                    type="submit">
                    Add Product
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addproduct;