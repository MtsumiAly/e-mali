import React from 'react';
import BlogCard from '../components/BlogCard';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

const Blog = () => {
  return (
    <>
    <Meta title={"Blogs"}/>
    <BreadCrumb title ="Blogs"/>
    <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                <div className="filter-card">
                        <h3 className="filter-title">Find Categories</h3>
                        <div>
                            <ul className="ps-0">
                                <li>Shower Gel & Body wash</li>
                                <li>Shampoo</li>
                                <li>Perfumes & Deos</li>
                                <li>Body Oils & Lotions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default Blog;