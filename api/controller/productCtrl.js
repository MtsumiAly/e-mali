const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const slugify = require("slugify");


const createProduct = asyncHandler(async (req, res) => {
    try{
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    }catch(error){
        throw new Error(error);
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: id },
            req.body,
            {
                new: true,
            }
        );
        res.json(updatedProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const getProductById = asyncHandler(async(req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const product = await Product.findById(id);
        res.json(product);
    }catch(error) {
        throw new Error(error);
    }
});

const getAllProducts = asyncHandler(async(req, res) => {
    try {
        // Filtering
        // creating a copy of the req.query object
        const queryObj = { ...req.query };
        // Excluding parameters used for pagination and field selection from queryObj
        const excludedFields = ["page", "sort", "limit", "fields"];
        excludedFields.forEach((el) => delete queryObj[el]);
        // Converting queryObj into a JSON string
        let queryStr = JSON.stringify(queryObj);
        //  replaces any occurrence of gte, gt, lte, and lt in the JSON string with their MongoDB equivalents $gte, $gt, $lte, and $lt.
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        // finding the products with the desired query params
        let query = Product.find(JSON.parse(queryStr));


        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy)
        }else {
            query = query.sort("-createdAt");
        }


        // Limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }

        // Pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page -1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >=productCount) throw new Error("this page doesn'st exist")
        }

        const products = await query;
        res.json(products);
    }catch(error) {
        throw new Error(error);
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

const addToWishList = asyncHandler(async(req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId);
        if(alreadyAdded){
            let user = await User.findByIdAndUpdate(
                _id,
                 {
                $pull: { wishlist: prodId },
            },
            {
                new: true,
            }
            );
            res.json(user);
        } else {
            let user = await User.findByIdAndUpdate(
                _id,
                 {
                $push: { wishlist: prodId },
            },
            {
                new: true,
            }
            );
            res.json(user);
        }
    } catch(error) {
        throw new Error(error);
    }
});

const rating = asyncHandler(async(req, res) => {
    const { _id } = req.user;
    const { star, prodId, comment } = req.body;
    try {
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find(
        (userId) => userId.postedBy.toString() === _id.toString()
        );
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated },
                },
                {
                    $set: { "ratings.$.star": star, "ratings.$.comment": comment },
                },
                {
                    new: true,
                }
            );
        } else {
            const rateProduct = await Product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            star: star,
                            comment: comment,
                            postedBy: _id,
                        },
                    },
                },
                {
                    new: true,
                }
            );
        }
        const getAllRatings = await Product.findById(prodId);
        let totalRating = getAllRatings.ratings.length;
        let ratingSum = getAllRatings.ratings
            .map((item) => item.star)
            .reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingSum / totalRating);
        let finalProduct = await Product.findByIdAndUpdate(prodId, {
            totalRating: actualRating
        },
        {
            new: true
        }
        );
        res.json(finalProduct)
    }catch (error) {

    }
});




// const filterProduct = asyncHandler(async (req, res) => {
//     const { minprice, maxprice, color, category, availability, brand } = req.params;
//     console.log(req.query);
//     try {
//         const filterProduct = await Product.find({
//             price: {
//                 $gte: minprice,
//                 $lte: maxprice,
//             },
//             category,
//             brand,
//             color,
//         });
//         res.json(filterProduct);
//     } catch (error) {
//         res.json(error);
//     }
//     res.json( {minprice, maxprice, color, category, availability, brand } )
// });

module.exports = { 
    createProduct,
    getProductById, 
    getAllProducts, 
    updateProduct, 
    deleteProduct, 
    addToWishList, 
    rating, 
};
