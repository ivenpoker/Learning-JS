// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a string of the form HH:MM:SS from a Date object.							 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const getStringFormA = (dateObj = new Date()) => {
	let hours = dateObj.getHours();
	let mins = dateObj.getMinutes();
	let secs = dateObj.getSeconds();

	return `${hours >= 10 ? hours : "0" + hours}:${mins >= 10 ? mins : "0" + mins}:${secs >= 10 ? secs : "0" + secs}`;
}

const getStringFormB = (dateObj = new Date()) => dateObj.toTimeString().slice(0, 8);

(function () {

	console.log(getStringFormA());
	console.log(getStringFormB());

})();