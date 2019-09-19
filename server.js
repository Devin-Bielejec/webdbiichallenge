const express = require("express");
const db = require("./data/dbconfig");

const server = express();

const port = 5000;


//read == get cars
server.get("/api/cars", )

//create == post a car



server.listen(port, () => console.log(`Listening on port ${port}`))