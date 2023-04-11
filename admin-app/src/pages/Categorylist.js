import React, { useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';
import { fetchCategories } from '../features/pcategory/pcategorySlice';
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import Link from 'antd/es/typography/Link';

const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];


const Categorylist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const pcategoryState = useSelector((state) => state?.pcategory?.productCategories);
  console.log(pcategoryState);
  
  const data1 = [];
  for (let i = 0; i < pcategoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: pcategoryState[i].title,
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
        <h3 className="mb-4"title>Product Categories</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  );
};

export default Categorylist;