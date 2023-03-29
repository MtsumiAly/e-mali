import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {TbGitCompare} from "react-icons/tb";
import {MdFavoriteBorder} from "react-icons/md"
import Container from '../components/Container';


const SingleProduct = () => {
  const props = {
    width: 400, 
    height: 500, 
    zoomWidth: 500, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GnpmMz7ikLmtzV1XRN1j4aetbKEYh1IKTw&usqp=CAU"
      };
  const [OrderProduct,setorderedProduct] = useState(0);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
    <Meta title={"Product Name"}/>
    <BreadCrumb title ="Product Name"/>
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
              <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img 
                  src="https://www.cantubeauty.com/wp-content/uploads/sites/3/2022/04/Cantu_collection_naturalhair-500x500.jpg"
                  className="img-fluid" 
                  alt=""/>
              </div>
              <div>
                <img 
                  src="https://www.cantubeauty.com/wp-content/uploads/sites/3/2023/02/CantuMens_FamilyShot_From_To-500x500.jpg"
                  className="img-fluid" 
                  alt=""/>
              </div>
              <div>
                <img 
                  src="https://cdn.sanity.io/images/4nopozul/tresemme-staging-us/24b2617a55ec14de5de52028c24256e2fc745b0e-2000x2000.jpg?w=768&h=768&fit=crop&auto=format&q=80"
                  className="img-fluid" 
                  alt=""/>
              </div>
              <div>
                <img 
                  src="https://cdn.sanity.io/images/4nopozul/tresemme-staging-us/6ca256f6073f88c747fad18eb1b2424fe0aee8e0-1200x1200.jpg?w=768&h=660&fit=fill&auto=format&q=80&bg=fff"
                  className="img-fluid" 
                  alt=""/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Emali Shampoo category ,2 in 1 ,for Natural Hair.
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">Ksh 1200</p>
                <div className="d-flex align-items-center gap-10">
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className=" p-review mb-0">2 Reviews</p>
                </div>
                <a className="review-btn" href="#review">Write a Review</a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Tresemme Shampoo</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">Tresemme</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">Shampoo</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data">e-mali</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability:</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 my-3">
                  <h3 className="product-heading">Size:</h3>
                 <dev className="d-flex flex-wrap gap-15">
                  <span className="badge border-1 border bg-white text-dark border-secondary">S</span>
                  <span className="badge border-1 border bg-white text-dark border-secondary">M</span>
                  <span className="badge border-1 border bg-white text-dark border-secondary">L</span>
                  <span className="badge border-1 border bg-white text-dark border-secondary">XL</span>
                  <span className="badge border-1 border bg-white text-dark border-secondary">XXL</span>
                 </dev>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 my-3">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex gap-15 align-items-center  flex-row mt-2 my-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="">
                    <input 
                    type="number" 
                    name="" 
                    min={1}
                    max={10}
                    className="form-control"
                    style={{ width:"70px" }} 
                    id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                        Buy It Now
                    </button>
                    <Link to="/signup" className="button signup">
                        Add To Cart
                    </Link>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2"/>
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href=""> 
                    <MdFavoriteBorder className="fs-5 me-2"/>
                    Add to Wishlist</a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns:</h3>
                  <p className="product-data">
                    Emali Delivery Service: Free Delivery For Sale Over KSh3000.
                    <br/> {""}Returns of Orders accordance to our Return policy.
                    All domestic Orders within <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading"> Product Link:</h3>
                  <a 
                    href="javascript:void(0);" 
                    onClick={()=>{
                    copyToClipboard(
                      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    );
                    }}
                  > 
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="descrption-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
            <p>
              I’m available for this opportunity immediately. 
              This change will help me practice my skills and ultimately enable 
              me to build obsessed solutions for our clients.
              I’m open to starting working on 27/3/2023.
              This one-week time frame will help me wrap up my current commitment to the final project
              and prepare myself for this new role. 
              Please let me know, if this date is convenient for you or if you have any concerns.
            </p>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
            <div className="review-head d-flex justify-content-between align-items-end">
              <div>
                <h4 className="mb-3">Customer Reviews</h4>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">Based on 2 Reviews</p>
                </div>
              </div>
             {setorderedProduct && (
                <div>
                  <a 
                    className="text-dark text-decoration-underline" 
                    href="#">
                      Write a Review
                  </a>
                </div>
             )}
            </div>
            <div className="review-form py-4">
            <h4 className="mb-3">Write a Review</h4>
            <form action="" className="d-flex flex-column gap-15">
              <div>
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={true}
                    activeColor="#ffd700"
                />
              </div>
                  <div>
                    <textarea 
                      name="" 
                      id="" 
                      className="w-100 form-control" 
                      col="30" 
                      rows="4"
                      placeholder="Comments">                      
                    </textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
            </div>
            <div className="reviews">
              <div className="review">
                <div className="d-flex gap-10 align-items-center">
                  <h6 className="mb-0">EmaliExpress</h6>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <p className="mt-3">
                  I’m available for this opportunity immediately. 
                  This change will help me practice my skills and ultimately enable 
                  me to build obsessed solutions for our clients.
                  I’m open to starting working on 27/3/2023.
                  This one-week time frame will help me wrap up my current commitment to the final project
                  and prepare myself for this new role. 
                  Please let me know, if this date is convenient for you or if you have any concerns.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="popular-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
    </Container>
    </>
  );
};

export default SingleProduct;