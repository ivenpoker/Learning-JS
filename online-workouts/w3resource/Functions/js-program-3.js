// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds all combinations of a string.				                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 1, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findAllCombinations = (mainStr) => {

	// if main string contains spaces, we remove them
	if (mainStr.split('').indexOf(' ') > 0) {
		const tokens = mainStr.split(' ');
		mainStr = tokens.reduce((acc, token) => `${acc}${token.trim()}`, "");
	}

	const combs = [];
	for (let i = 0; i < mainStr.length; i++) {
		let curr = `${mainStr.charAt(i)}`;
		if (curr === " ") {
			continue;
		}

		combs.push(curr);

		for (let j = i+1; j < mainStr.length; j++) {
			curr = `${curr}${mainStr.charAt(j)}`;
			combs.push(curr);
		}
		const edgeComb = `${mainStr.charAt(i)}${mainStr.charAt(mainStr.length-1)}`;

		if (combs.indexOf(edgeComb) < 0 && edgeComb.split('').reverse().join('') !== edgeComb ) {
			combs.push(`${mainStr.charAt(i)}${mainStr.charAt(mainStr.length-1)}`);
		}
	}
	return combs;
}

(function () {

	const testcase = "peterson";
	console.log("All combinations:", findAllCombinations(testcase));

})();