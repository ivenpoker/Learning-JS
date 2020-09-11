// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets removed elements of a given array until the passed function returns true.  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const reserveWhile = (data = [], func=f=>f) =>
    data.map((val) => !func(val) ? val : null).filter((val) => val);

(() => {

    console.log(reserveWhile([1, 2, 3, 4, 5, 6, 7, 8], (val) => val > 6));

})();