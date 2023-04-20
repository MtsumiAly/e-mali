import React, {useEffect} from 'react';
import {BsArrowDownRight} from "react-icons/bs";
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
import { fetchOrders } from '../features/orders/orderSlice';
import {useDispatch, useSelector } from "react-redux";

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
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



const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
     return "#ffd333";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: 'Income',
      },
    },
  };
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
      customerName: orderState[i].orderedBy.firstname + " " + orderState[i].orderedBy.lastname,
      product: orderState[i].products.map((i) => {
        return i.product.title;
      }).join(", "), 
      status: orderState[i].paymentIntent.status,
    });
  }
  return(
    <div>
      <h3 className="mb-4"title>Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className=" d-flex justify-content-betwwen align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div >
            <p className="desc">Total</p>
            <h4 className="mb-0" sub-title>ksh.800</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
          <h6>
            <BsArrowDownRight/>48%
          </h6>
          <p className="mb-0" desc>Compare To August 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-betwwen align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0" sub-title>ksh.1500</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className='red'>
              <BsArrowDownRight/>48%
            </h6>
            <p className="mb-0" desc>Compare To August 2023</p>
          </div>
        </div>
        <div className="d-flex justify-content-betwwen align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0" sub-title>ksh.1200</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight/>48%
            </h6>
          <p className="mb-0" desc>Compare To August 2023</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between  gap-3">
      <div className="mt-4">
        <h3 className="mb-5" title>Income Statics</h3>
        <div>
        <Column {...config} />;
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4" title>Recent Orders</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
      </div>
      </div>
      <div className="my-4">
        <h3 className="mb-4" title>Recent Reviews</h3>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;