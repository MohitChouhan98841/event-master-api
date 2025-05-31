import jwt from 'jsonwebtoken';
// import userModel from '../../models/users.js';
// import config from "../envconfig/envVars.js";

import dotenv from 'dotenv'
dotenv.config();

const authMiddleware = async (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers.authorization;
    if (!token) {
        return res.status(401).send({
            status: false,
            message: "Required authorization header not found.",
        });
    };

    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
    }

    const isVerified = jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).send({
                status: false,
                message: "Token is not valid",
            });
        } else {
            req.user = decoded;
            next();
        }
    });
};

export default authMiddleware;