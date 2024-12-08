import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    image: { 
        type: String 
    },
    youtube_link: {
        type: String
    },
    fb_link: {
        type: String
    },
    insta_link: {
        type: String
    },
    views: { 
        type: Number, 
        default: 0 
    }
}, { timestamps: true });

export const Blog = mongoose.model('Blog', blogSchema);
