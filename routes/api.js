import express from 'express';
import * as AuthController from "../app/controllers/AuthController.js";
import * as UserController from "../app/controllers/UserController.js";
import * as BlogController from "../app/controllers/BlogController.js";
import * as GuestController from "../app/controllers/GuestController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

const router = express.Router();


// registration & login
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

// users
router.get('/user', AuthMiddleware, UserController.getUser);
router.put('/user', AuthMiddleware, UserController.updateUser);

// blogs
router.post('/blogs', AuthMiddleware, BlogController.createBlog);
router.get('/blogs', AuthMiddleware, BlogController.getAllBlogs);
router.get('/blogs/:id', AuthMiddleware, BlogController.getBlogById);
router.put('/blogs/:id', AuthMiddleware, BlogController.updateBlog);
router.delete('/blogs/:id', AuthMiddleware, BlogController.deleteBlog);

router.get('/guest/blogs', GuestController.getAllBlogs);
router.get('/guest/blogs/:id', GuestController.getBlogById);
router.get('/guest/image/:id', GuestController.getBlogsImage);

export default router;