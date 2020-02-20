// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that accepts up to one argument, ignoring any additional     #
// #                     arguments.                                                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const unary = (fn) => (val) => fn(val);

(() => {

    console.log(['6', '8', '10'].map(unary(Number.parseInt)));

})();