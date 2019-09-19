const express = require("express");
const db = require("./data/dbconfig");

const server = express();

const port = 5000;

const serverError = (res, error) => {
    return res.status(500).json({message: error})
}

//read == get cars
server.get("/api/cars", (req, res) => {
    db("cars")
    .then(cars => res.json(cars))
    .catch(error => serverError(res, error))
})

//create == post a car



server.listen(port, () => console.log(`Listening on port ${port}`))