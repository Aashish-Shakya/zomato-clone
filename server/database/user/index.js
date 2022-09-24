import mongoose, { mongo } from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String },
        address: [{ details: { type: String }, for: { type: String } }],
        phoneNumber: { type: String, required: true },
        email: [{ type: Numner }],
    },
    {
        timestamps: true,
    })

//Attachements -- attach to ur models.schema
UserSchema.methods.generateJwtToken = function () { };

//Helper fn
UserSchema.statics.findByEmailAndPhone = async () => { };
UserSchema.statics.findByEmailAndPassword = async () => { };

export const UserModel = mongoose.model("users", UserSchema)