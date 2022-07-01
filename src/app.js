const express = require("express");
const morgan = require("morgan");

const app = express();

const sayHello = (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
};
  


app.use(morgan("dev"));
app.get("/hello", sayHello);

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
});
  
// Not-found handler
app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist!`);
  });

module.exports = app;