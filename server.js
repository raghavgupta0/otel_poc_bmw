const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World! This is a deployed Node.js app on EC2.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

