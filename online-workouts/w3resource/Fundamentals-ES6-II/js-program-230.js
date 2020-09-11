// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the human readable format of the given number of milliseconds.      		 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 26, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const getReadableFormat = (millisecs) => {
	const date = new Date(millisecs);
	return ({
		day: date.getDay(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		seconds: date.getSeconds(),
		month: date.getMonth() + 1,
		year: date.getFullYear(),
	});
};

const formatDistribution = (millisecs) => {
	if (millisecs < 0) {
		millisecs = Math.abs(millisecs);
	}
	const time = {
		day: Math.floor(millisecs / 86400000),
		hour: (Math.floor(millisecs / 3600000) % 24) + 1,
		minute: Math.floor(millisecs / 60000) % 60,
		second: Math.floor(millisecs / 1000) % 60,
		millisecs: Math.floor(millisecs) % 1000
	};
	return Object.entries(time)
		.filter(val => val[1] !== 0)
		.map(val => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
		.join(", ");
};

(function () {

	const todayMillisecs = Date.now();
	console.log("From getReadableFormat:", getReadableFormat(todayMillisecs));
	console.log("From formatDistribution:", formatDistribution(todayMillisecs));

})();