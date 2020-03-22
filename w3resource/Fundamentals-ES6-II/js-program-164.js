// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns the singular or plural form of the word based on the input number.      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 22, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const pluralize = (val, word, plural = word + 's') => {
	const _pluralize = (num, word, plural = word + 's') => {
		return [1, -1].includes(Number(num)) ? word : plural;
	};
	if (typeof (val) === 'object') {
		return (num, word) => _pluralize(num, word, val[word])
	}
	return _pluralize(val, word, plural);
};

(function () {

	console.log(pluralize(0, 'apple'));
	console.log(pluralize(1, 'apple'));
	console.log(pluralize(2, 'apple'));
	console.log(pluralize(2, 'person', 'people'));

	const PLURAL = {
		person: 'people',
		radius: 'radii'
	};
	const autoPluralize = pluralize(PLURAL);
	console.log(autoPluralize(2, 'person'));

})();

