// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes falsey values from a given array.                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const removeAllFalsy = (someArr = []) =>
    someArr.filter((data) => Boolean(data));

const runTests = () => {
    console.log(removeAllFalsy([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));
    console.log(removeAllFalsy([false, NaN, 'e' * 23]));
};

runTests();