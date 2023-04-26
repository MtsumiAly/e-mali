import {React, useEffect, useState} from 'react';
import Dropzone from 'react-dropzone'
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from "formik"
import * as yup from "yup";
import '../pages/css/addproduct.css';
import {useDispatch, useSelector} from "react-redux";
import { getAllBrands } from '../features/brand/brandSlice';
import { fetchCategories } from '../features/pcategory/pcategorySlice';
import { addNewProduct } from '../features/product/productSlice';

const prodSchema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string()
    .test(
      "no-empty-br",
      "Description is Required",
      (value) => {
        if (value && typeof value === 'string') {
          return value.replace(/<br>/g, "").trim().length > 0;
        }
        return false;
      }
    ),
  price: yup.number().required("Price is required"),
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  quantity: yup.number().required("Product Quantity is required"),
  size: yup.string().required("Product size is required")
});



const Addproduct = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("")
  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(fetchCategories());
  }, []);
  const brandState = useSelector((state) => state?.brand?.brands);
  const pcategoryState = useSelector((state) => state?.pcategory?.productCategories);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      quantity: "",
      size: "",
    },
    validationSchema: prodSchema,
    // onSubmit: (values) => {
    //    dispatch(addNewProduct(values));
    // },
    onSubmit: (values) => {
      dispatch(addNewProduct(values))
        .then((result) => {
          setMessage(result.payload || "Product added successfully");
          formik.resetForm();
        })
        .catch((err) => setMessage(err.payload));
   },

  });
  console.log(formik)
  return (
    <div>
        <h3 className="mb-4" title="true">Add Product</h3>
        <div>
            <form onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column'>
                <CustomInput 
                  type="text"
                  label="Enter Product Title"
                  name="title"
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  value={formik.values.title}
                />
                
                <div className='error-text'>
                  {formik.touched.title && formik.errors.title}
                </div>
                <div className="mb-3" onBlur={formik.handleBlur("description")}>
                  <ReactQuill 
                      theme="snow"
                      name="description"
                      onChange={formik.handleChange("description")}
                      value={formik.values.description}
                      placeholder='Enter Description'
                  />
                </div>
                <div className='error-text'>
                  {formik.touched.description && formik.errors.description}
                </div> 
                <CustomInput 
                  type="number" 
                  label="Enter Product Price"
                  name="price"
                  onChange={formik.handleChange("price")}
                  onBlur={formik.handleBlur("price")}
                  value={formik.values.price}
                />
                <div className='error-text'>
                  {formik.touched.price && formik.errors.price}
                </div> 
                <select 
                  name="" 
                  className="form-control py-3 mb-3" 
                  id="" 
                  onBlur={formik.handleBlur("brand")}
                  onChange={formik.handleChange("brand")}
                  value={formik.values.brand}
                >
                    <option value=''>Select Brand</option>
                    {brandState.map((item, key) => {
                      return (
                        <option key={key} value={item.title}>
                          {item.title}
                        </option>
                      )
                    })}
                </select>
                <div className='error-text'>
                  {formik.touched.brand && formik.errors.brand}
                </div>
                <select 
                  name="" 
                  className="form-control py-3 mb-3" 
                  id="" 
                  onBlur={formik.handleBlur("category")}
                  onChange={formik.handleChange("category")}
                  value={formik.values.category}
                >
                    <option value="">Select Category</option>
                    {pcategoryState.map((item, key) => {
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
                <CustomInput 
                  type="text"
                  label="Enter Product size"
                  name="size"
                  onChange={formik.handleChange("size")}
                  onBlur={formik.handleBlur("size")}
                  value={formik.values.size}
                />
                <div className='error-text'>
                  {formik.touched.size && formik.errors.size}
                </div>

                <CustomInput 
                  type="number" 
                  label="Enter Product Quantity"
                  name="quantity"
                  onChange={formik.handleChange("quantity")}
                  onBlur={formik.handleBlur("quantity")}
                  value={formik.values.quantity}
                />
                <div className='error-text'>
                  {formik.touched.quantity && formik.errors.quantity}
                </div>
                <div className='bg-white border-1 p-5 text-center'>
                  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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