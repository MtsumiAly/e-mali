import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector } from "react-redux";
import { deleteABrand, getAllBrands } from '../features/brand/brandSlice';
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
  

const Brandlist = () => {
  const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setBrandId(e);
  };
  console.log(brandId);
  const hideModal = () => {
    setOpen(false);
  };
  const brandState = useSelector((state) => state?.brand?.brands);
  console.log(brandState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      title: brandState[i].title,
      action: (
        <>
          <Link 
            to={`/admin/new-brand/${brandState[i]._id}`} 
            className=' fs-3 text-danger'
          >
            <BiEdit/> 
          </Link>
          <button 
            className='ms-3 fs-3 text-danger bg-transparent border-0' 
            onClick={() => showModal(brandState[i]._id)}
          >
            <AiFillDelete/>
          </button>
        </>),
    });
  }

  const brandData = useSelector((state) => state?.brand);
  const { isSuccess, isError, isLoading, message, deletedBrand } = brandData;


  useEffect(() => {
    if (isSuccess && message === "Successfully Deleted The Brand!") {
      toast.success("Brand Deleted Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [message]);

  const deleteBrand = (e) => {
    dispatch(deleteABrand(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getAllBrands());  
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4" title="true">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBrand(brandId);
        }}
        title="Are you sure you want to delete this brand?"/>
    </div>
  );
};

export default Brandlist;