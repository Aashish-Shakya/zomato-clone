import express from 'express';
import dotenv from 'dotenv';

//Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

dotenv.config();

zomato.use(express.json());

zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running up",

    });

});

const PORT = 4000;
zomato.listen(PORT, () => {

    // ConnectDB()
    //     .then(() => {
    //         console.log(`Server is running !!! on ${PORT} with db connected`);
    //     })
    //     .catch((error) => {
    //         console.log(`Server is running !!! on ${PORT} DB connection failed`);
    //         console.log(error);


    //     });

    console.log(`Server is running !!! on ${PORT}  `);
})












