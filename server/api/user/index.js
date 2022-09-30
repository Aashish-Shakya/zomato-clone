import express from "express";
import { UserModel } from '../../database/allModels'

const Router = express.Router();


/**
 * Route     /
 * Des       Get Authorized user data
 * Params    none
 * Access    Public
 * Method    POST
 */

Router.get("/", async (req, res) => {
    try {

        const { email, fullname, phoneNumber, adddress } = req.user;
        return res.json({ user: { email, fullname, phoneNumber, adddress } });


        // return res.json({});
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
})


/**


/**
 * Route    :-  /:_id
 * Desc     :- Get all the dteails based on city
 * Params   :- name
 * Access   :- Public
 * Method   :- Get
 * 
 */


export default Router;