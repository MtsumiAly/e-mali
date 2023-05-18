import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';
import { fetchCategories, deleteAProductCategory } from '../features/pcategory/pcategorySlice';
import CustomModal from '../components/CustomModal';
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";


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
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setCategoryId(e);
  };
  console.log(categoryId);
  const hideModal = () => {
    setOpen(false);
  };

  const pcategoryState = useSelector((state) => state?.pcategory?.productCategories);
  console.log(pcategoryState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  
  const data1 = [];
  for (let i = 0; i < pcategoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: pcategoryState[i].title,
      action: (
        <>
          <Link 
            to={`/admin/new-category/${pcategoryState[i]._id}`}
            className=' fs-3 text-danger '
          > 
            <BiEdit/> 
          </Link>
          <button 
            className='ms-3 fs-3 text-danger bg-transparent border-0'
            onClick={() => showModal(pcategoryState[i]._id)}
          >
            <AiFillDelete/>
          </button>
        </>),
    });
  }

  const categoryData = useSelector((state) => state?.pcategory);
  const { isSuccess, isError, isLoading, message, deletedPCategory } = categoryData;

  useEffect(() => {
    if (isSuccess && message === "Successfully Deleted The Product Category!") {
      toast.success("Category Deleted Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [message]);

  const deleteCategory = (e) => {
    dispatch(deleteAProductCategory(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(fetchCategories());  
    }, 100);
  };
  return (
    <div>
        <h3 className="mb-4"title="true">Product Categories</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCategory(categoryId);
        }}
        title="Are you sure you want to delete this product category?"/>

    </div>
  );
};

export default Categorylist;