// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the average of marks and use it to determine the grade.		 	         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: September 16, 2020.                                                             #
// #                                                                                                     #
// #######################################################################################################

const findAverage = (marks = []) => marks.reduce((acc, val) => acc + val, 0) / marks.length;

(function () {

	const marks = [80, 77, 88, 95, 68];
	const average = findAverage(marks);
	let grade = "A";

	if (average < 60) {
		grade = "F"
	} else if (average < 70) {
		grade = "D";
	} else if (average < 80) {
		grade = "C"
	} else if (average < 90) {
		grade = "B";
	}
	console.log("Average:", average);
	console.log("Grade:", grade);

})();