// need to change book ui pass of mongo in event aaashish2576
import joi from 'joi';
import { Schema } from 'mongoose';

export const ValidateSignup = (userData) => {
    const Schema = joi.object({
        fullName: joi.string().min(5).required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        address: joi.array().items(joi.object({ details: joi.string(), for: joi.string() })),
        phoneNumber: joi.array().items(joi.number().min(10).max(10)),


    })
    return Schema.validateAsync(userData);
};
export const ValidateSignin = (userData) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.required(),

    })
    return Schema.validateAsync(userData);
};



