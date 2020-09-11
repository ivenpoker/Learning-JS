// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Sort three numbers using an if statement.							 	         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 7, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const sortUsingIf = (valA, valB, valC) => {
	const values = [valA, valB, valC];
	let sorted = true;
	for (let i = 0; i < values.length-1; i++) {
		if (values[i] > values[i+1]) {
			sorted = false;
			break;
		}
	}
	if (!sorted) {
		return values.sort((a, b) => a - b);
	}
}

(function () {

	console.log(sortUsingIf(3, -7, 2));

})();


