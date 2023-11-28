const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const applyDefaultMiddleWares = require("./middlewares/applyDefaultMiddleWares");
const action = require("./router/v1/call-to-action/index");
const connectDB = require("./db/connectDB");
const petRouter = require("./router/v1/pets/index");
const adoptionRouter = require("./router/v1/adoption/index")
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// apply builtin middlewares
applyDefaultMiddleWares(app);

app.use('/call-to-action', action);
app.use('/pets', petRouter);
app.use('/adopted', adoptionRouter)

app.get('/health', (req, res) => {
    res.send('Server is running');
})

app.all('*', (req, res, next) => {
    console.log(req.url);
    const error = new Error(`Can't find the ${req.originalUrl} on this server`);
    error.status = 404;
    next(error);
})

app.use(globalErrorHandler);

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`server is running at port ${port}`);
    })
}

main();