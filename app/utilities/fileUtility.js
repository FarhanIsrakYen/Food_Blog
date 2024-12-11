import fs from 'fs';
import path from 'path';
import { Blog } from "../models/blogModel.js";

const UPLOAD_DIR = path.join(process.cwd(), 'public/uploads');

export const uploadImage = async (req, requestType = 'create', id = null) => {
    const uploadedFile = req.files.image;
    const imageName = Date.now() + '-' + uploadedFile.name;

    if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const uploadPath = path.join(UPLOAD_DIR, imageName);

    if (requestType === 'update') {
        const previousImage = await Blog.findById(id);
        if (previousImage?.image) {
            const previousImagePath = path.join(UPLOAD_DIR, previousImage.image);
            if (fs.existsSync(previousImagePath)) {
                fs.unlinkSync(previousImagePath);
            }
        }
    }

    await uploadedFile.mv(uploadPath, (err) => {
        if (err) {
            throw new Error('Image upload failed');
        }
    });

    return imageName;
};

export const getUploadDir = () => UPLOAD_DIR;
