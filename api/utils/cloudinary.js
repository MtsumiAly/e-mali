const cloudinary = require("cloudinary");


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });


const cloudinaryUploadImg = async (fileContent) => {
  try {
    const result = await cloudinary.uploader.upload(fileContent, {
      resource_type: "auto"
    });
    return {
      url: result.secure_url,
      asset_id: result.asset_id,
      public_id: result.public_id
    };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

const cloudinaryDeleteImg = async (public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    return result;
  } catch (err) {
    if (err.http_code === 404) {
      throw new Error("Image not found in Cloudinary");
    }
    console.error(err);
    throw new Error("Failed to delete image from Cloudinary");
  }
};





module.exports = {cloudinaryUploadImg, cloudinaryDeleteImg};