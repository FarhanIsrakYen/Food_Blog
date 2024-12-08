import express from 'express';
import cors from 'cors';
import rateLimit from "express-rate-limit";
import helmet from 'helmet';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import {
    DATABASE,
    MAX_JSON_SIZE, PORT,
    REQUEST_LIMIT_TIME,
    REQUEST_NUMBER,
    URL_ENCODE,
    WEB_CACHE
} from "./app/configs/config.js";
import router from "./routes/api.js";


const app = express();

app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());
app.use(cookieParser());
app.use(fileUpload());


const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME, max: REQUEST_NUMBER})
app.use(limiter)


app.set('etag', WEB_CACHE)

mongoose.connect(DATABASE, {autoIndex:true}).then(()=> {
    console.log("DB connected")
}).catch(() => {
    console.log("DB disconnected")
})

app.use('/api', router)

app.listen(PORT, () =>{
    console.log("Server started")
})