const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({ "message": "Hello Pankti!" });
});

app.listen(port, () => {
    console.log(`Example app is running on port: ${port}`);
});
