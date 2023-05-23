import React, { useEffect, useState } from 'react';
import { fetchBlogCategories, deleteABlogCategory } from "../features/bcategory/bcategorySlice";
import { Table } from 'antd';
import {useDispatch, useSelector } from "react-redux";
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import CustomModal from '../components/CustomModal';
import { toast } from 'react-toastify';

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
  const [open, setOpen] = useState(false);
  const [blogCategoryId, setBlogCategoryId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setBlogCategoryId(e);
  };
  console.log(blogCategoryId);
  
  const hideModal = () => {
    setOpen(false);
  };

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
          <Link 
            to={`/admin/new-blog-category/${bcategoryState[i]._id}`}
            className=' fs-3 text-danger '
          > 
            <BiEdit/> 
          </Link>
          <button
            className='ms-3 fs-3 text-danger bg-transparent border-0'
            onClick={() => showModal(bcategoryState[i]._id)}          
          >
            <AiFillDelete/>
          </button>
        </>),
    });
  }
  const BlogCategoryData = useSelector((state) => state?.blogcategory);
  const { isSuccess, isError, message, deletedBlogCategory } = BlogCategoryData;

  useEffect(() => {
    if (isSuccess && message === "Blog Category Deleted Successfully") {
      toast.success("Blog Category Deleted Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [message]);

  const deleteBlogCategory = (e) => {
    dispatch(deleteABlogCategory(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(fetchBlogCategories());  
    }, 100);
  };
  return (
    <div>
        <h3 className="mb-4"title="true">Blog Categories</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlogCategory(blogCategoryId);
        }}
        title="Are you sure you want to delete this Blog category?"/>

    </div>
  );
};

export default Blogcategorylist;