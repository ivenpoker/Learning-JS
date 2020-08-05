// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Writes a JSON object to a file.												 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const fs = require("fs");

const writeJSONobject = (filename, mainObj = {}) => {
	fs.writeFile(`./${filename}.json`, "" + JSON.stringify(mainObj, null, 4), (error, ...others) => {
		console.log(`Error: ${error} | Others: ${others}`);
	});
}

const readPersonFromFile = (filename = "", callback) => {
	fs.readFile(`${filename}.json`, "utf-8", (err, data) => {
		if (err) {
			console.log(`[ERROR]: ${err}`)
		} else {
			callback(JSON.parse(data))
		}
	})
}

(function () {

	let filename = "person"
	const person = {
		firstName: "Craig",
		lastName: "Peterson",
		age: 36,
		username: "craig_p",
		status: "active"
	}

	console.log(JSON.stringify(person));

	writeJSONobject(filename, person)


	readPersonFromFile(filename, (person) => {
		console.log("Person:", person)
	})

})();