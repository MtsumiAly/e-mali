import React, { useEffect } from 'react';
import {HiOutlineArrowLeft} from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from '../features/blogs/blogSlice';

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const location = useLocation();
  const blogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    getBlog();
  }, [])
  const getBlog = () => {
    dispatch(getABlog(blogId));
  };  
  return (
    <>
    <Meta title={blogState?.title}/>
    <BreadCrumb title ={blogState?.title}/> 
    <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to="/blog" className="d-flex align-items-center gap-10">
                            <HiOutlineArrowLeft className="fs-4"/>
                            Go back to Blogs
                        </Link>
                        <h3 className="title">{blogState?.title}</h3>
                        <img 
                            src={ blogState?.image[0].url ? blogState?.image[0].url : "/images/selsun_blog.JPG"} 
                            className="img-fluid w-100 my-4 "
                            alt="selsun"
                         />
                        <p dangerouslySetInnerHTML={{ __html: blogState?.description }}>
                        {/* Selsun Anti Dandruff Shampoo effectively eliminates dandruff, itchiness 
                        and scaling of the scalp. Selenium Sulfide is the active ingredient that not only 
                        eliminate fungus but helps to normalize the regeneration process of scalp cells. 
                        Has a pleasant fruity fragrance.  */}
                        </p>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default SingleBlog;