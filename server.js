const express = require("express");
const db = require("./data/dbconfig");

const server = express();

server.use(express.json());

const port = 5000;

const serverError = (res, error) => {
    return res.status(500).json({message: `Error: error`})
}

const required = (res, item) => {
    console.log("item", item);
    !item ? res.status(404).json({message: `${item} is required.`}) : null;
}

//read == get cars
server.get("/api/cars", (req, res) => {
    db("cars")
    .then(cars => res.json(cars))
    .catch(error => serverError(res, error))
})

//create == post a car
server.post("/api/cars", (req, res) => {
    const { vin, make, model, mileage, transmission, title_status } = req.body;
    required(res, vin);
    required(res, make);
    required(res, model);
    required(res, mileage);
    console.log(vin, make, model, mileage);
    db("cars").insert({vin, make, model, mileage})
    .then(cars => res.json(cars))
    .catch(error => serverError(res, error))
})


server.listen(port, () => console.log(`Listening on port ${port}`))