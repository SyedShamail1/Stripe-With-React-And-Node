//Imports
const express = require("express");
const dotenv = require("dotenv");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

//Setting up dotenv config, if this is not written we can not use dotenv secret keys here
dotenv.config();

 //For using express to create a server
const app = express();

//For getting request body to the end point
app.use(express.json());

//Enabling cors to receive request from front-end
app.use(cors())

//Endpoints mapping
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is Running");
});