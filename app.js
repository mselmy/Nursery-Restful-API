const express = require("express");
const morgan = require("morgan");
const server = express();
const port = process.env.Port || 8080;
const childRoute = require("./Route/childRoute");
const teacherRoute = require("./Route/teacherRoute");
const classRoute = require("./Route/classRoute");


server.listen(port, () => {
    console.log("I am listening...", port);
})

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use(childRoute);
server.use(teacherRoute);
server.use(classRoute);



/////////////////////////////Page not found error//////////////////////////
server.use((req, res) => {
    res.status(404).json({ message: "Page Not Found" });
})
/////////////////////////////catch all errors/////////////////////////////
server.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
})