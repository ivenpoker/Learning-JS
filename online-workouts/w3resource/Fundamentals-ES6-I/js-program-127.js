// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Iterates over a callback function n times.                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const times = (n, fn, context = undefined) => {
    let i = 0;
    while (fn.call(context, i) !== false && ++i < n) {}
};

(() => {

    let output = '';
    times(5, i => (output += i));
    console.log(output);

})();