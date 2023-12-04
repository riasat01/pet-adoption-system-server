const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const applyDefaultMiddleWares = (app) => {
    app.use(cors({
        origin: [process.env.LOCAL_CLIENT, process.env.CLIENT, process.env.CLIENT_EXTRA],
        credentials: true
    }));
    app.use(express.json());
    app.use(cookieParser());
}

module.exports = applyDefaultMiddleWares;