import React, { useEffect } from 'react'
import { Table } from 'antd';
import { fetchOrders } from '../features/orders/orderSlice';
import {useDispatch, useSelector } from "react-redux";
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import Link from 'antd/es/typography/Link';
import moment from 'moment'

const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Date',
      dataIndex: 'date'
    },
    {
      title: 'Products',
      dataIndex: 'products',
    },
    {
      title: 'Customer info',
      dataIndex: 'customer',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Total',
      dataIndex: 'total'
    }
    ,
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  const orderState = useSelector((state) => state?.order?.orders);
  console.log(orderState);
  
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: orderState[i]._id,
      products: orderState[i].products.map((i) => {
        return i.product.title;
      }).join(", "),
      date: moment(orderState[i].createdAt).format('MMMM Do YYYY, h:mm:ss a'),
      customer: orderState[i].orderedBy.firstname + " " + orderState[i].orderedBy.lastname,
      status: orderState[i].orderStatus,
      total: orderState[i].paymentIntent.amount,
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
        <h3 className="mb-4" title>Orders</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  );
};

export default Orders;