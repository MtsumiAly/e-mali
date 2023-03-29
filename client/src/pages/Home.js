import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from '../components/ProductCard';
import PopularCard from '../components/PopularCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import {services} from "../utils/Data";

const Home = () => {
  const specialProducts = [
    {
      id: 1,
      image: "/images/fem-fresh.jpg",
      brand: "Femfresh",
      title: "FEMFRESH INTIMATE WASH 250ML",
      rating: 4,
      price: 900,
      prevPrice: 1500,
      discountDays: 5,
      productCount: 5,
      productProgress: 25,
    },
    {
      id: 2,
      image: "/images/ceraVe.jpg",
      brand: "CeraVe",
      title: "CeraVe PM Facial Moisturizing Lotion with hyaluronic acid and niacin-amide ",
      rating: 3,
      price: 1200,
      prevPrice: 2500,
      discountDays: 0,
      productCount: 10,
      productProgress: 50,
    },
    {
      id: 3,
      image: "/images/cantu.jpg",
      brand: "Cantu",
      title: "Cantu Natural Hair Moisturizing Twist & Lock Gel (370gm)",
      rating: 5,
      price: 900,
      prevPrice: 1200,
      discountDays: 3,
      productCount: 2,
      productProgress: 10,
    },
    {
      id: 4,
      image: "/images/loreal_shampoo.jpeg",
      brand: "L'Oreal",
      title: "L'Oreal Paris Elvive Hyaluronic Plump, Hydrating Shampoo, for Dry Hair, 13.5 fl oz",
      rating: 2,
      price: 800,
      prevPrice: 1000,
      discountDays: 0,
      productCount: 20,
      productProgress: 80,
    }
  ];
  return(
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="/images/main-banner.png "
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="main-banner-content position-absolute" >
                {/*<h4>Add some here</h4>*/}
                {/*<h5>Can add text here</h5>*/}
                {/*<p>A paragraph</p>*/}
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-texts-center">
            <div className="small-banner position-relative">
              <div className="free-delivery-sticker position-absolute py-1">
                <img src="/images/delivery.png" alt="Free Delivery" />
              </div>
              <img src="/images/neutrogena.jpeg"
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                {/*<h2>15% OFF</h2>*/}
                {/*<h5>Some text</h5>*/}
                {/*<p>Ksh. </p>*/}
              </div>
            </div>
            <div className="small-banner position-relative">
              <div className="new-arrivals-top position-absolute py-1">
                <img src="/images/new_arrivals.png" alt="New Arrivals" style={{ width: '150%', maxWidth: '500px', height: 'auto'}}/>
              </div>
              <img src="/images/neutrogena2.jpg "
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                {/*<h4>New Arrival</h4>*/}
                {/*<h5>Buy Ipad Air</h5>*/}
                {/*<p>From $999.00 <br/> or $41.62/mo.</p>*/}
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="/images/neutrogena3.jpg "
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                {/*<h4>FREE ENGRAVING</h4>*/}
                {/*<h5>AirPods Max</h5>*/}
                {/*<p>From $999.00 <br/> or $41.62/mo.</p>*/}

              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="/images/neutrogena5.jpeg "
              className="img-fluid rounded"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                {/*<h4>BEST SALES</h4>*/}
                {/*<h5>Laptops Max</h5>*/}
                {/*<p>From $999.00 <br/> or $41.62/mo.</p>*/}

              </div>
            </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                services?.map((i,j)=>{
                  return(
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services"/>
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  {/*<h6>Cameras</h6>*/}
                  <p>10 items</p>
                </div>
                <img src="/images/neutrogena_deep_clean.jpg" alt="neutrogena deep clean" style={{ width: '50%', maxWidth: '500px', height: 'auto'}}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Acnes Vitamin Cream 40gm</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/acnes.jpeg" alt="acnes" style={{ width: '50%', maxWidth: '500px', height: 'auto'}}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Veet Removal Cream Sensitive Skin - 100ML</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/veet.jpg" alt="veet" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Coco-pulp Skin Lightening & Brightening Face & Body Cream</h6>
                  <p>5 items</p>
                </div>
                <img src="/images/coco-pulp.jpg" alt="camera" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>St Ives Renewing Collagen & Elastin Moisturizer</h6>
                  <p>5 items</p>
                </div>
                <img src="/images/st_ives.jpg" alt="st.ives cream" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Vitamin C Anti-Aging Brightening Serum</h6>
                  <p>4 items</p>
                </div>
                <img src="/images/anti_aging.jpg" alt="anti_aging cream" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>NIVEA Moisturising Creme Jar 200ml</h6>
                  <p>12 items</p>
                </div>
                <img src="/images/nivea_soft.jpg" alt="Nivea Soft" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
              <div className="d-flex gap-15 align-items-center">
                <div>
                  <h6>Garnier Skin Active Pure Charcoal Black Tissue Face Mask</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/garnier_skin_active.jpg" alt="garnier Mask" style={{ width: '50%', maxWidth: '500px', height: 'auto' }}/>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="featured-wrapper home-wrapper-2 py-5">
    <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/fruit_collagen.jpg" className="img-fluid" alt="Shampoos" />
              <div className="famous-content position-absolute">
              {/*<h5 className="text-dark">MASKS</h5>*/}
              {/*<h6>Collagen</h6>*/}
              {/*<p>From $399 or 16.62/mo. for 24mo</p>*/}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <div className="new-arrivals-top position-absolute py-1">
                <img src="/images/new_arrivals.png" alt="New Arrivals" style={{ width: '150%',maxWidth: '500px', height: 'auto'}}/>
              </div>
              <img src="/images/rashel_mask.jpg"
              className="img-fluid"
              alt="famous"/>
              {/*<div className="famous-content position-absolute">*/}
              {/*<h5 className="text-dark">Studio Display</h5>*/}
              {/*<h6 className="text-dark">600 unit of Brightness</h6>*/}
              {/*<p className="text-dark">27-inch 5k Retina Display</p>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <div className="new-arrivals-top position-absolute py-1">
                <img src="/images/new_arrivals.png" alt="New Arrivals" style={{ width: '150%',maxWidth: '500px', height: 'auto'}}/>
              </div>
              <img src="/images/rorec_blueberry.jpg"
              className="img-fluid"
              alt="Rorec Blueberry mask"/>
              {/*<div className="famous-content position-absolute">*/}
              {/*<h5 className="text-dark">SMARTPHONE</h5>*/}
              {/*<h6 className="text-dark">Smart Phone Pro</h6>*/}
              {/*<p className="text-dark">*/}
              {/*  Now in Green From Ksh 300 for a pack</p>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <div className="new-arrivals-top position-absolute py-1">
                <img src="/images/new_arrivals.png" alt="New Arrivals" style={{ width: '150%',maxWidth: '500px', height: 'auto'}}/>
              </div>
              <img src="/images/garnier_charcoal.jpg"
              className="img-fluid"
              alt="Garnier Charcoal Serum"/>
              {/*<div className="famous-content position-absolute">*/}
              {/*<h5 className="text-dark">HOME SPEAKER</h5>*/}
              {/*<h6 className="text-dark">Room-Filling Sound</h6>*/}
              {/*<p className="text-dark">*/}
              {/*  From $699 or 116.58/mo for 12mo.*</p>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <div className="row">
            {specialProducts.map(product => (
              <SpecialProduct
                key={product.id}
                image={product.image}
                brand={product.brand}
                title={product.title}
                rating={product.rating}
                price={product.price}
                prevPrice={product.prevPrice}
                discountPrice={product.discountPrice}
                discountDays={product.discountDays}
                productCount={product.productCount}
                productProgress={product.productProgress}
              />
            ))}
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
          <PopularCard/>
          <PopularCard/>
          <PopularCard/>
          <PopularCard/>
        </div>
    </Container>
    <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className='d-flex'>
              <div className="mx-4 w-25">
                <img src="/images/cantu_logo.png" alt="Cantu logo"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/revlon_logo1.png" alt="Revlon logo"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/unilever_logo.png" alt="Unilever logo" style={{ width: '40%',maxWidth: '300px', height: 'auto' }} />
              </div>
              <div className="mx-4 w-25">
                <img src="/images/garnier_logo.png" alt="Garnier logo" style={{ width: '100%',maxWidth: '300px', height: 'auto' }} />
              </div>
              <div className="mx-4 w-25">
                <img src="/images/neutrogena_logo.png" alt="Neutrogena Logo"/>
              </div>
              <div className="mx-4 w-25">
                <img src="/images/dove_logo.png" alt="Dove logo" style={{ width: '80%',maxWidth: '300px', height: 'auto' }} />
              </div>
              <div className="mx-4 w-25">
                <img src="/images/loreal_logo.png" alt="L'Oreal logo" style={{ width: '100%',maxWidth: '300px', height: '100%' }} />
              </div>
              <div className="mx-4 w-25">
                <img src="/images/nivea_logo.png" alt="Nivea logo" style={{ width: '80%',maxWidth: '300px', height: 'auto' }} />
              </div>
            </Marquee>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>

        </div>
        <div className="row">
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
        </div>
    </Container>
    </>
  );
};

export default Home;
