// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets removed elements from the end of a given array until the passed function   #
// #                     returns true.                                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const reserveWhile = (data = [], func=f=>f) =>
    data.reverse().map((val) => !func(val) ? val : null).filter((val) => val).reverse();

(() => {

    console.log(reserveWhile([1, 2, 3, 4], (n) => n < 3));

})();