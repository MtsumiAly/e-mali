const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
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
        const products = await Product.find(req.query);
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

module.exports = { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct };
