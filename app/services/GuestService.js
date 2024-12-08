import {Blog} from "../models/blogModel.js";
import mongoose from "mongoose";

export const GetAllBlogsService = async (req) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * limit;

        const blogs = await Blog.aggregate([
            { $sort: { createdAt: -1 } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: '_id',
                    as: 'authorDetails',
                },
            },
            { $unwind: '$authorDetails' },
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
            { $skip: skip },
            { $limit: limit },
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
        const id = req.params.id;

        await Blog.findByIdAndUpdate(
            id,
            { $inc: { views: 1 } },
            { new: true }
        );

        const blog = await Blog.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id) } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: '_id',
                    as: 'authorDetails',
                },
            },
            { $unwind: '$authorDetails' },
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

        if (!blog || blog.length === 0) {
            return { status: 'fail', message: 'Blog not found' };
        }

        return { status: 'success', message: 'Blog retrieved successfully', data: blog[0] };
    } catch (error) {
        return { status: 'fail', message: error.toString() };
    }
};