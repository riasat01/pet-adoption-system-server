const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const applyDefaultMiddleWares = (app) => {
    app.use(cors({
        origin: ['http://localhost:5173', 'https://petsnpals-7107f.web.app', 'https://petsnpals-7107f.firebaseapp.com'],
        credentials: true
    }));
    app.use(express.json());
    app.use(cookieParser());
}

module.exports = applyDefaultMiddleWares;