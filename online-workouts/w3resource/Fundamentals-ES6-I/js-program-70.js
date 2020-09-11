// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Count occurrences of a value in an array of values.                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const countOccurrences = (arr = [], key) =>
    arr.reduce((acc, val) => val === key ? acc + 1 : acc, 0);

// Run tests

(() => {

    console.log(countOccurrences([1, 2, 3, 1, 1, 4], 1));
    console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
    console.log(countOccurrences([1, 1,2, 1, 2, 3], 3));

})();