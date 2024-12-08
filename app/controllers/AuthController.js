import {LoginService, RegistrationService} from "../services/AuthService.js";


export const login = async(req, res) => {
    let result = await LoginService(req)
    return res.json(result)
}

export const register = async(req, res) => {
    let result = await RegistrationService(req)
    return res.json(result);
}