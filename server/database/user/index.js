import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import e from "express";


const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String },
        address: [{ details: { type: String }, for: { type: String } }],
        phoneNumber: [{ type: Number }],
    },
    {
        timestamps: true,
    })

//Attachements -- attach to ur models.schema
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};

//Helper fn
UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User Already Exists ...!");
    }
    return false;



};
UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User Does not exists !!!")


    //Compare Password
    const doesPasswordMatch = await bcrypt.compare(password, user.password)

    if (!doesPasswordMatch) throw new Error('Invalid Credentials!!!');
    return user;

};

UserSchema.pre('save', function (next) {
    const user = this;

    //password is modified/encypt

    if (!user.isModified('password')) return next();

    //generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);

        //hash the pass
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            //assigning hashed pass
            user.password = hash;
            return next();
        });
    });

});

export const UserModel = mongoose.model("users", UserSchema)