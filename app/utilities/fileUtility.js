import fs from 'fs';
import path, {dirname} from 'path';
import {Blog} from "../models/blogModel.js";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const UPLOAD_DIR = process.env.NODE_ENV === 'production' ? '/tmp' : path.join(__dirname, '../../uploads');

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
