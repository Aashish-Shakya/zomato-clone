// need to change book ui pass of mongo in event aaashish2576
import joi from 'joi';
import { Schema } from 'mongoose';



export const validateRestaurantCity = (restaurantObject) => {
    const Schema = joi.object({
        city: joi.string().required(),

    })
    return Schema.validateAsync(restaurantObject);
};
export const validateSearchString = (restaurantObject) => {
    const Schema = joi.object({
        category: joi.string().required(),

    })
    return Schema.validateAsync(restaurantObject);
};



