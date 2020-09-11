// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the first non-null / undefined argument.                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));

const runTests = () => {
    console.log(coalesce(null, undefined, '', NaN, 'abcd'));
};

runTests();