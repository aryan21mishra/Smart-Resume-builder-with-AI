import cloudinary from "../config/cloudinary.js";

export async function uploadCloud({ localFilePath }) {
  try {
    if (!localFilePath) {
      return "Could'nt find the LOCAL FILE PATH ";
    }
    // file upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file has been uploaded successful
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
}
