// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Takes a predicate function and an array, like Array.filter(), but only keeps x  #
// #					 if pred(x) === false.													         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 18, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const doProcessing = (array = [], pred=f=>f) =>
	array.filter((...args) => !pred(...args));

(function () {

	const demoPredA = (x) => x % 2 === 0;
	const demoPredB = (word) => word.length > 4;

	console.log(doProcessing([1, 2, 3, 4, 5], demoPredA));
	console.log(doProcessing(['Apple', 'Pear', 'Kiwi', 'Banana'], demoPredB));


})();