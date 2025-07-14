const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: "dy2ltqocb",
  api_key: "418582597657657",
  api_secret: "oPko-I0S9amXpdykpN1jRhF2Za0",
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    const formattedPath = path.resolve(localFilePath).replace(/\\/g, "/");

    const result = await cloudinary.uploader.upload(formattedPath, {
      resource_type: "image",
    });

    fs.unlinkSync(formattedPath); // Cleanup local file after upload

    return result;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Cleanup even on failure
    }
    return null;
  }
};

module.exports = uploadOnCloudinary;
