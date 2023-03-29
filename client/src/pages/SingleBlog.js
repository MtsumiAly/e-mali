import React from 'react';
import {HiOutlineArrowLeft} from "react-icons/hi";
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
    <Meta title={"Emali Dynamic Blog"}/>
    <BreadCrumb title ="Emali Dynamic Blog"/> 
    <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to="/blog" className="d-flex align-items-center gap-10">
                            <HiOutlineArrowLeft className="fs-4"/>
                            Go back to Blogs
                        </Link>
                        <h3 className="title">
                        Selsun Anti-Dandruff Shampoo 50ml
                        </h3>
                        <img 
                            src="/images/selsun_blog.JPG" 
                            className="img-fluid w-100 my-4 "
                            alt="selsun"
                         />
                        <p>
                        Selsun Anti Dandruff Shampoo effectively eliminates dandruff, itchiness 
                        and scaling of the scalp. Selenium Sulfide is the active ingredient that not only 
                        eliminate fungus but helps to normalize the regeneration process of scalp cells. 
                        Has a pleasant fruity fragrance. 
                        </p>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default SingleBlog;