const Category = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    }catch (error) {
        throw new Error(error);
    }
});

const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findByIdAndUpdate(id, req.body, {new:true});
        res.json(category);
    }catch (error) {
        throw new Error(error);
    }
});

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findByIdAndDelete(id);
        res.json(category);
    }catch (error) {
        throw new Error(error);
    }
});

module.exports = { createCategory, updateCategory, deleteCategory }