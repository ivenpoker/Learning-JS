// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a given string is an anagram of another string.  				 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: May 13, 2020.                                                                   #
// #                                                                                                     #
// #######################################################################################################

const isAnagram = (str1, str2) => {
	const normalize = (str) =>
		str.toLowerCase()
			.replace(/[^a-z0-9]/gi, '')
			.split('')
			.sort()
			.join('');
	return normalize(str1) === normalize(str2);
}

(function () {

	console.log(isAnagram("iceman", "cinema"));
	console.log(isAnagram("madam", "madam"));

})();