import { Blog } from "../models/blogModel.js";
import { uploadImage } from "../utilities/fileUtility.js";
import path from "path";
import mongoose from "mongoose";

export const CreateBlogService = async (req) => {
    try {
        let {title, content, youtube_link, fb_link, insta_link } = req.body;
        let image = null;
        if (req.files) {
            image = await uploadImage(req);
        }
        const blog = Blog.create({
            title: title,
            content: content,
            author: req.cookies.userId,
            image: image,
            youtube_link: youtube_link,
            fb_link: fb_link,
            insta_link: insta_link,
        })

        return { status: 'success', message: 'Blog created successfully', data: blog };
    } catch (error) {
        return { status: 'fail', message: error.toString() };
    }
};

export const UpdateBlogService = async (req) => {
    try {
        const id = req.params.id;
        let {title, content, youtube_link, fb_link, insta_link } = req.body;

        const blog = await Blog.findById(id);
        if (!blog) {
            return { status: 'fail', message: 'Blog not found' };
        }
        let image = blog.image;
        if (req.files) {
            image = await uploadImage(req, 'update', id);
        }
        const updatedBlog = await Blog.updateOne(
            { _id: id },
            { title, content, image, youtube_link, fb_link, insta_link }
        );

        return { status: 'success', message: 'Blog updated successfully', data: updatedBlog };
    } catch (error) {
        return { status: 'fail', message: error.toString() };
    }
};

export const GetAllBlogsService = async (req) => {
    try {
        const blogs = await Blog.aggregate([
            {
                $match: {
                    author: new mongoose.Types.ObjectId(req.cookies.userId),
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: '_id',
                    as: 'authorDetails',
                },
            },
            {
                $unwind: '$authorDetails',
            },
            {
                $sort: { createdAt: -1 },
            },
            {
                $project: {
                    title: 1,
                    content: 1,
                    image: 1,
                    youtube_link: 1,
                    fb_link: 1,
                    insta_link: 1,
                    views: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    authorName: {
                        $concat: ['$authorDetails.firstname', ' ', '$authorDetails.lastname'],
                    },
                },
            },
        ]);

        return {
            status: 'success',
            message: 'Blogs retrieved successfully',
            data: blogs,
        };
    } catch (error) {
        return {
            status: 'fail',
            message: error.toString(),
        };
    }
};

export const GetBlogByIdService = async (req) => {
    try {
        const blog = await Blog.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(req.params.id),
                    author: new mongoose.Types.ObjectId(req.cookies.userId),
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: '_id',
                    as: 'authorDetails',
                },
            },
            {
                $unwind: '$authorDetails',
            },
            {
                $sort: { createdAt: -1 },
            },
            {
                $project: {
                    title: 1,
                    content: 1,
                    image: 1,
                    youtube_link: 1,
                    fb_link: 1,
                    insta_link: 1,
                    views: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    authorName: {
                        $concat: ['$authorDetails.firstname', ' ', '$authorDetails.lastname'],
                    },
                },
            },
        ]);

        return {
            status: 'success',
            message: 'Blog retrieved successfully',
            data: blog,
        };
    } catch (error) {
        return {
            status: 'fail',
            message: error.toString(),
        };
    }
};

export const DeleteBlogService = async (req) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) return { status: 'fail', message: 'Blog not found' };

        return { status: 'success', message: 'Blog deleted successfully' };
    } catch (error) {
        return { status: 'fail', message: error.toString() };
    }
};

export const GetImageService = async(imageName) => {
    try {
        return path.join(__dirname, '../../uploads/', imageName)
    } catch (error) {
        return {status: false, message: error.toString()}
    }
}
