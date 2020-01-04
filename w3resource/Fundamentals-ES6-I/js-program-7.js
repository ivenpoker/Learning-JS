// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a specified number to an array of digits.                              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const digitize = (someNum) => {
     return `${someNum}`.split('').reduce((acc, val) => {
         acc.push(Number(val));
         return acc;
     }, []);
};

const runTests = () => {
    console.log(digitize(123));
    console.log(digitize(1230));
};

// Run the test cases for script program
runTests();