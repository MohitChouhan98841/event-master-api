import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = Schema({
    userName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    profileImage: { type: String },
    userRole: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user', // Default value for the 'role' field if not specified during document creation
        require: true
    },
}, { timestamps: true }
)

const userModel = mongoose.model("user",userSchema);

export default userModel;