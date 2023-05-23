import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector } from "react-redux";
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import CustomModal from '../components/CustomModal';
import { Link } from 'react-router-dom'
import { deleteACoupon, getAllCoupons } from '../features/coupon/couponSlice';
import { toast } from "react-toastify";
import moment from 'moment';

const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Coupon Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Expiry Date',
        dataIndex: 'expiry',
        sorter: (a, b) => a.expiry.length - b.expiry.length,
      },
      {
        title: 'Coupon Discount',
        dataIndex: 'discount',
        sorter: (a, b) => a.discount.length - b.discount.length,
      },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  

const Couponlist = () => {
  const [open, setOpen] = useState(false);
  const [couponId, setCouponId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setCouponId(e);
  };
  console.log(couponId);
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoupons());
  }, []);
  const couponState = useSelector((state) => state?.coupon?.coupons);
  console.log(couponState);
  const formatDate = (date) => {
    return moment(date, 'YYYY-MM-DD').format('dddd, MMMM Do');
  };
  
  
  const data1 = [];
  for (let i = 0; i < couponState.length; i++) {
    const formattedExpiry = formatDate(couponState[i].expiry)
    data1.push({
      key: i + 1,
      name: couponState[i].name,
      expiry: formattedExpiry,
      discount: couponState[i].discount,
      action: (
        <>
          <Link 
            to={`/admin/new-coupon/${couponState[i]._id}`} 
            className=' fs-3 text-danger'
          > 
            <BiEdit/>
          </Link>
          <button 
            className='ms-3 fs-3 text-danger bg-transparent border-0' 
            onClick={() => showModal(couponState[i]._id)}
          >
            <AiFillDelete/>
          </button>
        </>),
    });
  }

  const couponData = useSelector((state) => state?.coupon);
  const { isSuccess, isError, isLoading, message, deletedCoupon } = couponData;


  useEffect(() => {
    if (isSuccess && message === "Successfully Deleted The Coupon!") {
      toast.success("Coupon Deleted Successfully!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [message]);

  const deleteCoupon = (e) => {
    dispatch(deleteACoupon(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getAllCoupons());  
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4" title>Coupons</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCoupon(couponId);
        }}
        title="Are you sure you want to delete this Coupon?"/>
    </div>
  );
};

export default Couponlist;