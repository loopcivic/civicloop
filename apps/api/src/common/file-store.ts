// import fs from 'fs';
// import path from 'path';
// import { sha256 } from './hash';

// export function saveBase64ToUploads(base64: string, ext: string) {
//   const raw = base64.includes(',') ? base64.split(',')[1] : base64;
//   const buf = Buffer.from(raw, 'base64');

//   const hash = sha256(buf.toString('binary'));
//   const filename = `${Date.now()}-${hash.slice(0, 16)}.${ext}`;
//   const fullPath = path.join(process.cwd(), 'uploads', filename);

//   fs.writeFileSync(fullPath, buf);
//   return { url: `/uploads/${filename}`, sha256: hash, size: buf.length };
// }


import { v2 as cloudinary } from 'cloudinary';
import { sha256 } from './hash';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Converted to async since cloud uploads take time
export async function saveBase64ToUploads(base64: string, ext: string) {
  const raw = base64.includes(',') ? base64.split(',')[1] : base64;
  const hash = sha256(raw);
  
  // Format as a data URI for Cloudinary
  const dataUri = `data:image/${ext};base64,${raw}`;
  
  const result = await cloudinary.uploader.upload(dataUri, {
    folder: 'civicloop_complaints',
  });

  // Return the live secure URL instead of a local path
  return { url: result.secure_url, sha256: hash, size: result.bytes };
}