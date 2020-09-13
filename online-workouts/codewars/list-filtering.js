// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Filter out specific data from array of data.                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 13, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const filterList = (data = []) =>
	data.filter((val) => !(typeof(val) == "string"));

(function () {

	console.log(filterList([1, 2, 'a', 'b']));
	console.log(filterList([1, 'a', 'b', 0, 15]))

})();