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
                            Ultimate Shower Gel for your beloved Family
                        </h3>
                        <img 
                            src="image/blog-1.jpg" 
                            className="img-fluid w-100 my-4 "
                            alt="neutrogena"
                         />
                        <p>
                        Neutrogena Hydro Boost Hydrating Lotion Spf25 boosts hydration and strengthens the skin's defences. 
                        This special formula consist of hyaluronic acid which replenishes skin with a boost of intense hydration 
                        and also strengthens the skin barrier day after day so it can actively defend against external aggressors. 
                        </p>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default SingleBlog;