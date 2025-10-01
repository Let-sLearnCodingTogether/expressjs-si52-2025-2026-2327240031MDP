import mongoose from "mongoose";

const UserScheme = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username wajb di isi"],
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email wajb di isi"],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password wajb di isi"]
        }
    },
    {
        timestamps: true
    }
)

const UserModel = mongoose.Model("User", UserSchema)

export default UserModel;