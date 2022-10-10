// need to change book ui pass of mongo in event aaashish2576
import joi from 'joi';
import { Schema } from 'mongoose';



export const validateId = (id) => {
    const Schema = joi.object({
        _id: joi.string().required(),

    })
    return Schema.validateAsync(id);
};
export const validateCategory = (category) => {
    const Schema = joi.object({
        category: joi.string().required(),

    })
    return Schema.validateAsync(id);
};



