import React from 'react';
import { Table } from 'antd';
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      status: `London, Park Lane no. ${i}`,
    });
  }
 

const Productlist = () => {
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