
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

app.get("/home", (request, response) => {
	console.log("request at:", request.url);
	response.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/img_upload", (req, resp) => {
	console.log("request at:", req.url);
	resp.send({
		status: "success"
	});
})

const server = app.listen(PORT, HOST_NAME, () => {
	console.log(`Upload server running at http://${HOST_NAME}:${PORT}/home`);
});
