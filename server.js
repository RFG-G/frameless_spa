const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.get("/*", (_, res) => res.sendFile(path.resolve(__dirname, "frontend", "index.html")));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}...`));