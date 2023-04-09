import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { addToWishList } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  console.log(data)

  const dispatch = useDispatch();

  let location = useLocation();
  const addToWish = (id)=> {
    dispatch(addToWishList(id))
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            className={` ${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
            key={index}
          >
            <Link to="" className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent" onClick={(e) => {addToWish(item?._id)}}>
                  <img src="/images/wish.svg" alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0]?.url}
                  className="img-fluid mx-auto"
                  alt="product image"
                  width={160}
                />
                <img
                  src="/images/garnier_hydrabomb.jpg"
                  className="img-fluid mx-auto"
                  alt="product image"
                  width={160}
                />
              </div>
              <div className="product-details">
                <h4 className="brand">{item?.brand}</h4>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalRatings.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">Ksh {item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src="/images/prodcompare.svg" alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="/images/view.svg" alt="view" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="/images/add-cart.svg" alt="add-cart" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
