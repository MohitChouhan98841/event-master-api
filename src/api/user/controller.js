import userModel from "../../model/user.js"
import bcrypt from "bcrypt"
import { getUserByEmail, getUserById } from "./service.js";
import { UserResponse } from "../../response/user.js";
import { getUserToken } from "../../helper/jwt_auth/jwt_helper.js";
import { validationResult } from "express-validator";
import { clubAllRequriedFeild } from "../../helper/validaction/validaction_helpwe.js";


export const registerUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const emailLower = email.toLowerCase();
        const checkUser = await getUserByEmail(email)
        if (checkUser) {
            return res.status(500).send({
                status: false,
                message: "Email already used"
            })
        }
        const userObj = userModel(
            {
                email: emailLower,
                userName: userName,
                password: bcrypt.hashSync(password, 10),
            }
        )
        const userData = await userObj.save();
        if (userData) {
            return res.status(200).send({
                status: true,
                message: "User created Succesfully",
                token: "token",
                data: new UserResponse(userData)
            })
        }
        return res.status(500).send({
            status: false,
            message: "Faild to register user"
        })

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userObj = await getUserByEmail(email);
        if (!userObj) {
            return res.status(500).send({
                status: false,
                message: "User not found"
            })
        }
        if (!bcrypt.compareSync(password, userObj.password)) {
            return res.status(500).send({
                status: false,
                message: "Encorrect password"
            })
        }
        return res.status(200).send({
            status: true,
            message: "Login successfull",
            token: await getUserToken({
                user_id: userObj._id
            }),
            data: new UserResponse(userObj)
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

export const changePassword = async (req, res) => {
    try {
        const { oldPassword, password } = req.body;
        const userObj = await getUserById(req.user.user_id);
        if (!userObj) {
            return res.status(500).send({
                status: false,
                message: "User not found"
            })
        }
        if (!bcrypt.compareSync(oldPassword, userObj.password)) {
            return res.status(500).send({
                status: false,
                message: "Encorrect old password"
            })
        }

        userObj.password = bcrypt.hashSync(password, 10)
        await userObj.save()
        return res.status(200).send({
            status: true,
            message: "Password change successfully"
        })
    } catch (error) {
       return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}



///later on sed a token and it will help to reset password api
export const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const userObj = await getUserByEmail(email);
        if (!userObj) {
            return res.status(500).send({
                status: false,
                message: "User not found"
            })
        }
        /// Shoot Email 

        const newPass = randomStr(8, '12345abcde');

        const passHash = bcrypt.hashSync(newPass, 10);
        userObj.password = passHash;

        const userData = await userObj.save()

        return res.status(200).send({
            status: true,
            message: "new password has send to your email",
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

function randomStr(len, arr) {
    let ans = '';
    for (let i = len; i > 0; i--) {
        ans +=
            arr[(Math.floor(Math.random() * arr.length))];
    }
    console.log(ans);
    return ans;
}

