import React, { useEffect } from 'react';
import { fetchBlogs } from "../features/blogs/blogSlice";
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
      title: 'Blog Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Blog Description',
      dataIndex: 'description',
    },
    {
      title: 'Blog Category',
      dataIndex: 'category',
    },
    {
      title: 'Blog Views',
      dataIndex: 'views',
      sorter: (a, b) => a.views - b.views,
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  

const Bloglist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  const blogState = useSelector((state) => state?.blog?.blogs);
  console.log(blogState);
  
  const data1 = [];
  for (let i = 0; i < blogState.length; i++) {
    data1.push({
      key: i + 1,
      title: blogState[i].title,
      description: blogState[i].description,
      category: blogState[i].category,
      views: blogState[i].numViews,
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
        <h3 className="mb-4" title>Blog List</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  );
};
export default Bloglist;