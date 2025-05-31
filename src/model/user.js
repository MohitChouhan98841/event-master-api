import mongoose from 'mongoose';
import { UserRole } from '../constants/app_constants.js';

const Schema = mongoose.Schema;

const userSchema = Schema({
    userName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    profileImage: { type: String },
    userRole: {
        type: Number,
        default:UserRole.user,//user
        // enum: ['user', 'admin', 'moderator'],
        // default: 'user', // Default value for the 'role' field if not specified during document creation
        require: true
    },
}, { timestamps: true }
)

const userModel = mongoose.model("user",userSchema);

export default userModel;