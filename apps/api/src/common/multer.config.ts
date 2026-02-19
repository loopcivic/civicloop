// import { diskStorage } from "multer";
// import { extname } from "path";
// import { randomUUID } from "crypto";
// import { join } from "path";
// export const multerConfig = {
//   storage: diskStorage({
//     destination: join(process.cwd(), "src", "uploads"),
//     filename: (req, file, cb) => {
//       const filename = randomUUID() + extname(file.originalname);
//       cb(null, filename);
//     },
//   }),
// };

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure Cloudinary with your .env credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const multerConfig = {
  storage: new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'civicloop_complaints', // Creates a clean folder in your Cloudinary dashboard
      allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
      transformation: [{ width: 1000, crop: 'limit' }], // Automatically shrinks massive 4K phone photos to save bandwidth!
    } as any,
  }),
};