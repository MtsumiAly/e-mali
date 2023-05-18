import React, { useEffect } from 'react';
import { Table } from 'antd';
import {useDispatch, useSelector } from "react-redux";
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import Link from 'antd/es/typography/Link';
import { getAllCoupons } from '../features/coupon/couponSlice';

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
        title: 'Coupon DIscount',
        dataIndex: 'discount',
        sorter: (a, b) => a.discount.length - b.discount.length,
      },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  

const Couponlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoupons());
  }, []);
  const couponState = useSelector((state) => state?.coupon?.coupons);
  console.log(couponState);
  
  const data1 = [];
  for (let i = 0; i < couponState.length; i++) {
    data1.push({
      key: i + 1,
      name: couponState[i].name,
      expiry: couponState[i].expiry,
      discount: couponState[i].discount,
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
    <h3 className="mb-4" title>Coupons</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
    </div>
  );
};

export default Couponlist;