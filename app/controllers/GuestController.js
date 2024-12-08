import {GetAllBlogsService, GetBlogByIdService} from "../services/GuestService.js";
import {GetImageService} from "../services/BlogService.js";

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await GetAllBlogsService(req);
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBlogById = async (req, res) => {
    try {
        const blog = await GetBlogByIdService(req);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBlogsImage = async (req, res) => {
    let result = await GetImageService(req.header.imageName)
    return res.sendFile(result)
}