import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishList } from '../features/user/userSlice';
import { addToWishList } from '../features/products/productSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, [])
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishList());
  };
  const removeFromWishlist = (id) => {
    dispatch(addToWishList(id));
    setTimeout(() => {
        dispatch(getUserProductWishList());
    }, 300);
  };
  const wishlistState = useSelector((state) => state.auth.wishlistProducts.wishlist); 
  console.log(wishlistState);
  return (
    <>
    <Meta title={"Wishlist"}/>
    <BreadCrumb title ="Wishlist"/>
    <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                {
                    wishlistState?.map((item, index) => {
                        return (
                            
                <div className="col-3" key={index}>
                <div className="wishlist-card  position-relative">
                    <img
                        onClick={() => {
                            removeFromWishlist(item?._id);
                        }} 
                        src="images/cross.svg" 
                        alt="cross" 
                        className="cross position-absolute img-fluid"
                    />
                    <div className="wishlist-card-image">
                        <img
                            src={item?.images[0].url? item?.images[0].url : "images/emali_nivea.JPG"} 
                            className="img-fluid d-block mx-auto" 
                            alt=""
                            width={160}
                         />
                    </div>
                    <div className="py-3 px-2">
                        <h5 className="title">
                        {item?.title}
                        </h5>
                        <h6 className="price">Ksh{item?.price}</h6>
                    </div>
                </div>
            </div>
                        )
                    })
                }
            </div>
    </Container>
    </>
  );
};

export default Wishlist;