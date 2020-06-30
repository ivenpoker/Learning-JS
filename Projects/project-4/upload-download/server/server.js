
const express    = require("express");
const path       = require("path");
const fs         = require("fs");
const bodyParser = require("body-parser");
const multer     = require("multer");

const PORT = 3000;
const HOST_NAME = "localhost";

const app = express();
const upload = multer({dest: "/tmp"});

app.use(express.static(path.join(__dirname, "../")));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (request, response) => {
	console.log("request at:", request.url);
	response.sendFile(path.join(__dirname, "../public/index.html"));
});

const server = app.listen(PORT, HOST_NAME, () => {
	console.log(`Upload server running at http://${HOST_NAME}:${PORT}`);
});
