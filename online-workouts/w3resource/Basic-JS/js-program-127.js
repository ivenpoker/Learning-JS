// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Reverses the order of the bits in a given integer.                              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const mirrorBits = (num) => {
    return Number.parseInt(num.toString(2).split('').reverse().join(''), 2);
};
const runTests = () => {
    console.log(mirrorBits(56));
    console.log(mirrorBits(234));
};

// Run the test for the program now.
runTests();