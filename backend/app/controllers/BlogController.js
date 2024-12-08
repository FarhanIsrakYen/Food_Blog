import {
    CreateBlogService,
    DeleteBlogService,
    GetAllBlogsService,
    GetBlogByIdService,
    UpdateBlogService
} from "../services/BlogService.js";

export const createBlog = async (req, res) => {
    try {
        const blog = await CreateBlogService(req);
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await GetAllBlogsService(req);
        return res.json(blogs)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBlogById = async (req, res) => {
    try {
        const blog = await GetBlogByIdService(req);
        return res.json(blog);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateBlog = async (req, res) => {
    try {
        const response = await UpdateBlogService(req);
        res.status(response.status === 'success' ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.toString() });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const blog = await DeleteBlogService(req);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};