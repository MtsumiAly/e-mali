const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Set storage for uploaded files using multer.diskStorage
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder for uploaded files
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for uploaded files
    const uniqueSuffix = Date.now() + "." + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "." + uniqueSuffix + ".jpeg");
  },
});

// Filter for accepted file types using multerFilter
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported file format",
      },
      false
    );
  }
};

// Set up the multer middleware for handling file uploads
const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fieldSize: 2000000 },
});

// Resize product images using sharp
const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/products/${file.filename}`);
      fs.unlinkSync(`public/images/products/${file.filename}`)
    })
    
  );
  next();
};

// Resize blog images using sharp
const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename}`);
    })
  );
  next();
};

// Export the middleware functions for file upload and image resizing
module.exports = { uploadPhoto, productImgResize, blogImgResize }
