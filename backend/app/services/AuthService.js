import bcrypt from 'bcryptjs';
import { User } from "../models/usersModel.js";
import { TokenEncode } from "../utilities/tokenUtility.js";


export const LoginService = async(req) => {
    try {
        let {email, password} = req.body;
        const user = await User.findOne({email: email});
        if (!user) {
            return {status: 'fail', message: "Email doesn't exist"};
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return {status: 'fail', message: "Invalid credential"};
        }

        let token = TokenEncode(user.email, user.password, user._id)
        return {status: 'success', message: 'Logged in successfully', token: token}
    } catch (error) {
        return {status: 'fail', message: error.toString()}
    }
}

export const RegistrationService = async(req) => {
    try {
        let {email, password, firstname, lastname, username} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        User.create({
            email: email,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname,
            username: username,
        });
        return {status: 'success', message: 'Registered successfully'}
    } catch (error) {
        return {status: 'fail', message: error.toString()}
    }
}