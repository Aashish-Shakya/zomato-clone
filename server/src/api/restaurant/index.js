import express from "express";
import { RestaurantModel } from '../../database/allModels'
import { validateRestaurantCity, validateSearchString } from "../../validation/restaurant.validation";

const Router = express.Router();


/**
 * Route     /
 * Des       Create new restaurant
 * Params    none
 * Access    Public
 * Method    POST
 */
// Homework

/**


/**
 * Route    :-  /:_id
 * Desc     :- Get all the dteails based on city
 * Params   :- name
 * Access   :- Public
 * Method   :- Get
 * 
 */

Router.get("/", async (req, res) => {
    try {
        //https://localhost:4000/restaurant/?city=ncr
        const { city } = req.query;
        // console.log(city)
        // await validateRestaurantCity(req.params);

        const restaurants = await RestaurantModel.find({ city });

        if (restaurants.length === 0) {
            return res.json({ error: "No restaurant found in this city" })
        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
})

/**
 * Route    :-  /:_id
 * Desc     :- Get individual restaurant details based on id
 * Params   :- _id
 * Access   :- Public
 * Method   :- Get
 * 
 */

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);

        if (!restaurant) {
            return res.status(400).json({ error: "Restaurant not food with this id" });
        }
        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
})

/**
 * Route    :-  /search/searchstring
 * Desc     :- Get restaurant details based on search string
 * Params   :-serachString
 * Access   :- Public
 * Method   :- Get
 * 
 */


Router.get("/search/:searchString", async (req, res) => {

    /** Example  searchString == Raj 
   * results = {
   *  RajHotel
   *  RajRow
   *  RonRaj
   *  raJRow
   * }
    */
    try {
        const { searchString } = req.params;
        await validateSearchString(req.params);


        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        });

        if (!restaurants.length === 0) {
            return res
                .status(404)
                .json({ error: `No restaurant matched with ${searchString}` });
        }

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;