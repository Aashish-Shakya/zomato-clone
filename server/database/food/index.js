import mongoose, { mongo } from "mongoose";
const FoodSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        isVeg: { type: Boolean, required: true },
        isContainsEgg: { type: Boolean, required: true },
        category: { type: String, required: true },
        photos: {
            type: mongoose.Types.ObjectId,
            ref: "images", required: true,
        },
        category: { type: Number, default: 150, required: true },
        addOns: [
            {
                type: mongoose.Types.ObjectId,
                ref: "foods",
            },],
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "restaurants",
            required: true,
        },
    },
    {
        timestamps: true,
    })

export const FoodModel = mongoose.model("foods", FoodSchema)