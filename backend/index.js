require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./api/users/user.router");

port = process.env.APP_PORT 

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(`API rodando em localhost:${port}/`);
})
