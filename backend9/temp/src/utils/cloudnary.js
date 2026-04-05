import { v2 as cloudnary } from "cloudnary";
import fs from "fs"; // file system

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadcloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;

    const result = await cloudinary.uploader.upload(localfilepath, {
      response_type: "auto",
    });
   // file has been upload successfully
   console.log("File uploaded to Cloudinary:", result.secure_url);
   return result.secure_url;
  } catch (error) {
    fs.unlinkSync(localfilepath) // remove the locally saved temporary file as the upload failed

    console.error("Error uploading to Cloudinary:", error);
    return null;
  }
}; 


export default uploadcloudinary;