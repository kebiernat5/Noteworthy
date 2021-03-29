// Dependencies

const express = require('express');
const path = require('path');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes')


// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiroutes);
app.use("/", htmlroutes);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
