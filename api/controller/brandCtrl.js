const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createBrand = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    }catch (error) {
        throw new Error(error);
    }
});

const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const brand = await Brand.findByIdAndUpdate(id, req.body, {new:true});
        res.json(brand);
    }catch (error) {
        throw new Error(error);
    }
});

const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const brand = await Brand.findByIdAndDelete(id);
        res.json(brand);
    }catch (error) {
        throw new Error(error);
    }
});

const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const brand = await Brand.findById(id);
        res.json(brand);
    }catch (error) {
        throw new Error(error);
    }
});

const getAllBrands = asyncHandler(async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    }catch (error) {
        throw new Error(error);
    }
});

module.exports = { createBrand, updateBrand, deleteBrand, getBrand, getAllBrands }