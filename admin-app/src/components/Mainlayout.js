import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {SiBrandfolder} from "react-icons/si";
import {BiCategoryAlt} from "react-icons/bi";
import {ImBlog} from "react-icons/im";
import {GiConversation} from "react-icons/gi";
import {IoIosNotifications} from "react-icons/io";
import {FaClipboardList,FaBlogger} from "react-icons/fa";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineBgColors
} from "react-icons/ai";
import {Outlet} from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const Mainlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <h2 className="text-black fs-5 text-center py-3 mb-0">
            <span className="sm-logo">e-Mali</span>
            <span className="lg-logo">e-Mali</span>
          </h2>
          </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          //navigation over the dashboard
          onClick = {({key}) =>{
            if (key === 'signup'){

            }else{
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: < AiOutlineDashboard className="fs-4"/>,
              label: 'Dashboard',
            },
            {
              key: 'customer',
              icon: < AiOutlineUser className="fs-4"/>,
              label: 'Customer',
            },
            {
              key: 'catalog',
              icon: < AiOutlineShoppingCart className="fs-4"/>,
              label: 'Catalog',
              children:[
                {
                  key: 'product',
                  icon: < AiOutlineShoppingCart className="fs-4"/>,
                  label: 'Add Product', 
                },
                {
                  key: 'product-list',
                  icon: < AiOutlineShoppingCart className="fs-4"/>,
                  label: 'Product-List', 
                },
                {
                  key:'brand',
                  icon:<SiBrandfolder className="fs-4"/>,
                  label:'Brand',
                },
                {
                  key:'brand-list',
                  icon:<SiBrandfolder className="fs-4"/>,
                  label:'Brand List',
                },
                {
                  key:'category',
                  icon:<BiCategoryAlt className="fs-4"/>,
                  label:'Category',
                },
                {
                  key:'category-list',
                  icon:<BiCategoryAlt className="fs-4"/>,
                  label:'Category List',
                },
                {
                  key:'color',
                  icon:<AiOutlineBgColors className="fs-4"/>,
                  label:'Color',
                },
                {
                  key:'color-list',
                  icon:<AiOutlineBgColors className="fs-4"/>,
                  label:'Color List',
                },
              ],
            },
            {
              key: 'orders',
              icon: < FaClipboardList className="fs-4"/>,
              label: 'Orders',
            },
            {
              key: 'blogs',
              icon: < FaBlogger className="fs-4"/>,
              label: 'Blogs',
              children:[
                {
                  key: 'blog',
                  icon: < ImBlog className="fs-4"/>,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: < FaBlogger className="fs-4"/>,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: < ImBlog className="fs-4"/>,
                  label: 'Add Blog category',
                },
                {
                  key: 'blog-category-list',
                  icon: < FaBlogger className="fs-4"/>,
                  label: 'Blog category List',
                },
              ],
            },
            {
              key: 'enquiries',
              icon: < GiConversation className="fs-4"/>,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
            className="d-flex justify-content-between ps-1 pe-5"
            style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          
          <div className="d-flex gap-3 align=items-center">
            <div className="position-relative">
              <IoIosNotifications/>
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex gap-3 d-fluid">
                <img
                  width={32}
                  height={32} 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznq-_ubyl2jrYQ-piDSoZz2vTO5Ops4qIflkkQliVsQ&s" 
                  alt=""/>
              </div>
              <div 
                role="button" 
                id="dropdownMenuLink" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <h5 className="mb-0">Aly Mtsumi</h5>
                <p className="mb-0">aly@emali.com</p>
              </div>
              <div 
                className="dropdown-menu" 
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <Link 
                    className="dropdown-item py-1 mb-1" 
                    style={{height:"auto",lineHeight:"20px"}}
                    to="/"
                  >
                      View Profile
                    </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item py-1 mb-1"
                    style={{height:"auto",lineHeight:"20px"}} 
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;