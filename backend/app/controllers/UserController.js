import {GetUserService, UpdateUserService} from "../services/UserService.js";


export const getUser = async(req, res) => {
    let result = await GetUserService(req)
    return res.json(result)
}

export const updateUser = async(req, res) => {
    let result = await UpdateUserService(req)
    return res.json(result)
}