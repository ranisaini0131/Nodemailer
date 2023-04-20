const express = require('express');
const router = require('./routes/route.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//routes
app.use("/api", router);
app.use("/api", router);


app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});