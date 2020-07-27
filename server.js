// Imports:
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

// Middleware:
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cors);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('successfully connected to database');
});

// App listener:
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});