import React, { useEffect } from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector } from "react-redux";
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import { fetchProducts } from '../features/product/productSlice';
import Link from 'antd/es/typography/Link';
const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
 

const Productlist = () => {
  const productState = useSelector((state) => state?.product?.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: productState[i]._id,
      productName: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      quantity: productState[i].quantity,
      price: productState[i].price,
      action: (
        <>
          <Link className=' fs-3 ' to="/"> 
            <BiEdit/> 
          </Link>
          <Link className='ms-3 fs-3 text-danger' to="/">
            <AiFillDelete/>
          </Link>
        </>),
    });
  }
  
  return (
    <div>
    <h3 className="mb-4"title>Products</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
    <div className="d-flex justify-content-center align-items-right">
    <button 
      className="btn btn-success border-0 rounded-3 my-5" 
      type="submit">
      Add Product
    </button>
    <button 
      className="btn btn-success border-0 rounded-3 my-5" 
      type="submit">
      Edit
    </button>
    </div>
    </div>
  );
};

export default Productlist;