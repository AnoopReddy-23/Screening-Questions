"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const answers_1 = __importDefault(require("./routes/answers"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
//import path module (core module)
const path_1 = __importDefault(require("path"));
//connect build of react app with nodejs
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/client/build')));
app.use("/users", users_1.default);
app.use("/responses", answers_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default
    .sync()
    .then(() => {
    console.log("Database successfully connected");
})
    .catch((err) => {
    console.log("Error", err);
});
//dealing with page refersh
app.use('*', (request, response) => {
    response.sendFile(path_1.default.join(__dirname, '../../client/client/build/index.html'));
});
//handling invalid path by using middleware
app.use((request, response, next) => {
    response.send({ message: `Path ${request.url} is Invalid` });
});
//Error handling middleware
app.use((error, request, response, next) => {
    response.send({ message: "Error occured", reason: `${error.message}` });
});
//assigning port number
app.listen(4000, () => {
    console.log("Server started on port 4000");
});
