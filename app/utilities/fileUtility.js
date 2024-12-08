import {fileURLToPath} from 'url';
import path, {dirname} from 'path';
import fs from 'fs';
import {Blog} from "../models/blogModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const uploadImage = async (req, requestType = 'create', id = null) => {
    const uploadedFile = req.files.image;
    let imageName = Date.now() + '-' + uploadedFile.name;
    const directoryPath = path.join(__dirname, '../../uploads/');

    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, {recursive: true});
    }

    let uploadPath = path.join(directoryPath, imageName);

    if (requestType === 'update') {
        const previousImage = await Blog.findById(id);
        if (previousImage.image != null) {
            await fs.unlink(path.join(__dirname, '../../uploads/', previousImage.image), (err) => {
                if (err) {
                    return null;
                }
            })
        }
    }

    await uploadedFile.mv(uploadPath, (err) => {
        if (err) {
            return null;
        }
    });
    return imageName;
}
