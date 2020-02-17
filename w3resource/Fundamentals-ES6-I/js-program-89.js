// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Negates a predicate function.                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const negate = (func) => (...args) => !func(...args);

(() => {

    console.log([1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)));

})();