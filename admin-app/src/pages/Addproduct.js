import {React, useEffect, useState} from 'react';
import Dropzone from 'react-dropzone'
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from "formik"
import * as yup from "yup";
import '../pages/css/addproduct.css';
// import `react-toastify/dist/ReactToastify.css`;
import {useDispatch, useSelector} from "react-redux";
import { getAllBrands } from '../features/brand/brandSlice';
import { fetchCategories } from '../features/pcategory/pcategorySlice';
import { addNewProduct } from '../features/product/productSlice';
import { deleteImage, uploadImage } from '../features/upload/uploadSlice';
import { Navigate } from 'react-router-dom';

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
  tags: yup.string().required("Product tags are required"),
  size: yup.string().required("Product size is required")
});



const Addproduct = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("")
  const [images, setImages] = useState([]);
  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(fetchCategories());
  }, []);
  const brandState = useSelector((state) => state?.brand?.brands);
  const pcategoryState = useSelector((state) => state?.pcategory?.productCategories);
  const imageState = useSelector((state) => state?.upload?.images);
  console.log(imageState);

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
      price: "",
      brand: "",
      category: "",
      quantity: "",
      size: "",
      images: [],
      tags: "",
    },
    validationSchema: prodSchema,
    onSubmit: (values) => {
       dispatch(addNewProduct(values));
       formik.resetForm();
       setTimeout(() => {
        navigate("/admin/product-list");
       }, 3000);
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
                <select 
                  name="tags" 
                  className="form-control py-3 mb-3" 
                  id="" 
                  onBlur={formik.handleBlur("tags")}
                  onChange={formik.handleChange("tags")}
                  value={formik.values.tags}
                >
                    <option value="" disabled>
                      Select Tag
                    </option>
                    <option value="featured">Featured</option>
                    <option value="popular">Popular</option>
                    <option value="special">Special</option>
                </select>
                <div className='error-text'>
                  {formik.touched.tags && formik.errors.tags}
                </div>
                <div className='bg-white border-1 p-5 text-center'>
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
                    Add Product
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addproduct;