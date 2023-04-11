import React, { useEffect } from 'react';
import { fetchBlogCategories } from "../features/bcategory/bcategorySlice";
import { Table } from 'antd';
import {useDispatch, useSelector } from "react-redux";
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

const Blogcategorylist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogCategories());
  }, []);
  const bcategoryState = useSelector((state) => state?.blogcategory?.blogCategories);
  console.log(bcategoryState);
  
  const data1 = [];
  for (let i = 0; i < bcategoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: bcategoryState[i].title,
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
        <h3 className="mb-4" title>Blog Categories </h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  );
};

export default Blogcategorylist;