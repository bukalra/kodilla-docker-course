const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    res.send("Helloooooo World from Node Application - voulume working fine");
});

app.listen(port, () => {
   console.log("Running on port " + port);
});
