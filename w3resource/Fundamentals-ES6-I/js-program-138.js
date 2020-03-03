// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Takes a variadic function and returns a closure that accepts an array arguments #
// #                     to map to the inputs of the function.                                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 03, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const spreadOver = (fn) => (argsArr) => fn(...argsArr);

(function () {

    const arrayMax = spreadOver(Math.max);
    console.log(arrayMax([1, 2, 3]));

})(); 