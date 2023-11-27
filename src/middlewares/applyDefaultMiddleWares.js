const express = require("express");
const cors = require("cors");

const applyDefaultMiddleWares = (app) => {
    app.use(cors());
    app.use(express.json());
}

module.exports = applyDefaultMiddleWares;