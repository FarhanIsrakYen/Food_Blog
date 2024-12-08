import {TokenDecode} from "../utilities/tokenUtility.js";


export default (req, res, next) => {
    let token = req.headers['token']
    let decoded = TokenDecode(token)
    if (decoded == null) {
        res.status(401).json({status: "fail", message: "Unauthorized"})
    }
    let email = decoded.email
    let userId = decoded.userId
    req.headers.email = email
    req.headers.userId = userId
    res.cookie('userId', userId, {
        maxAge: 24 * 60 * 60 * 1000
    });
    next()
}