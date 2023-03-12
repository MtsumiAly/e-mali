import React from 'react';

const Home = () => {
  return(
    <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img src="/images/main-banner.jpg "
              className="img-fluid rounded" 
              alt="main banner"/>
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pros.</h5>
                <p>From $999.00 to $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-texts-center">
            <div className="small-banner position-relative p-3">
              <img src="/images/catbanner-01.jpg "
              className="img-fluid rounded" 
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pros.</h5>
                <p>From $999.00 to $41.62/mo.</p>
  
              </div>
            </div>
            <div className="small-banner position-relative p-3">
              <img src="/images/catbanner-01.jpg "
              className="img-fluid rounded" 
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pros.</h5>
                <p>From $999.00 to $41.62/mo.</p>
  
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div>
                <img src="" alt="services"/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap align-items-center">
              <div>
                <img src="" alt="services"/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src="" alt="services"/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src="" alt="services"/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/watch.jpg" alt="camera"/>
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;