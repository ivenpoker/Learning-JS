// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Takes any number of iterable objects or objects with a length property and      #
// #                     returns the longest one.                                                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const longestItem = (...vals) =>
    [...vals].sort((a, b) => b.length = a.length)[0];

(() => {

    console.log(longestItem('this', 'is', 'a', 'test case'));
    console.log(longestItem(...['a', 'ab', 'abc']));
    console.log(longestItem(...['a', 'ab', 'abc'], 'abcd'));
    console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
    console.log(longestItem([1, 2, 3], 'foobar'));

})();