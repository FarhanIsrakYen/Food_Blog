import jwt from "jsonwebtoken";
import { JWT_EXPIRE_TIME, JWT_KEY } from "../configs/config.js";

export const TokenEncode = (email, password, userId) => {
    const KEY = JWT_KEY
    const EXPIRE = {expiresIn: JWT_EXPIRE_TIME}
    const PAYLOAD = {email: email, password:password, userId:userId}
    return jwt.sign(PAYLOAD, KEY, EXPIRE)
}

export const TokenDecode = (token) => {
    try {
        return jwt.verify(token, JWT_KEY)
    } catch (error) {
        return null
    }
}