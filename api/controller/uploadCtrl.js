const { cloudinaryUploadImg, cloudinaryDeleteImg, } = require("../utils/cloudinary");
const asyncHandler = require("express-async-handler");
const fs = require("fs");

const uploadImages = asyncHandler(async(req, res) => {
    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            console.log(newPath);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        const images =  urls.map((file) => {
            return file;
        });
        res.json(images);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
});


const deleteImages = asyncHandler(async(req, res) => {
  const { id } = req.params;
  try {
    const deletedImage = await cloudinaryDeleteImg(id);
    if (deletedImage.result === "not found") {
      res.status(404).json({ message: "Image not found in Cloudinary" });
    } else {
      res.json({ message: "Deleted" });
    }
  } catch (error) {
    throw new Error(error);
  }
});


module.exports = {
    uploadImages,
    deleteImages,
}