// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Reduce direction based on pattern to avoid useless movements.                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 16, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const directionReduction = (mainData = []) => {
	const results = [];

	for (let idx = 0; idx < mainData.length;) {
		const dir = mainData[idx];
		let addDir = false;

		if (idx + 1 < mainData.length) {
			if ((dir ===  "NORTH" && mainData[idx+1] === "SOUTH" || dir === "SOUTH" && mainData[idx+1] === "NORTH")
				||
				(dir === "EAST" && mainData[idx+1] === "WEST" || dir === "WEST" && mainData[idx+1] === "EAST")) {
				idx += 2;

			} else {
				// results.push(dir);
				addDir = true;
				idx += 1;
			}
		} else {
			// results.push(dir);
			addDir = true;
			idx += 1;
		}
		if (addDir) {
			if (results.length === 0) {
				results.push(dir);

			} else {
				const lastResultDir = results[results.length - 1];

				if (!(dir === "NORTH" && lastResultDir === "SOUTH" ||
					dir === "SOUTH" && lastResultDir === "NORTH" ||
					dir === "EAST" && lastResultDir === "WEST" ||
					dir === "WEST" && lastResultDir === "EAST")) {
					results.push(dir);
				} else {
					results.pop()
				}
			}
		}
	}

	return results;
};

(function () {

	console.log(directionReduction(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
	console.log(directionReduction(["NORTH", "WEST", "SOUTH", "EAST"]))
	console.log(directionReduction(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
	console.log(directionReduction( ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));

	console.log(directionReduction(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'WEST', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'EAST', 'WEST']))

})();