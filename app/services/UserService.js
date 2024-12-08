import {User} from "../models/usersModel.js";

export const GetUserService = async(req) => {
    try {
        let userId = req.cookies.userId;
        const user = await User.findById(userId);
        return {status: 'success', message: 'User retrieved successfully', data: user}
    } catch (error) {
        return {status: 'fail', message: error.toString()}
    }
}

export const UpdateUserService = async(req) => {
    try {
        let userId = req.cookies.userId;
        let data = await User.updateOne({_id: userId}, req.body)
        return {status: 'success', message: 'User updated successfully', data: data}
    } catch (error) {
        return {status: 'fail', message: error.toString()}
    }
}