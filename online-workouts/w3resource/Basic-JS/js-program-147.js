// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the sum of all digits that occur in a given string.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const isNumeric = (num) => {
    return !Number.isNaN(num - Number.parseFloat(num));
};

const findAllDigitSum = (mainStr) => {
   let sum = 0;
   mainStr.split('').forEach((elem) => {
       if (isNumeric(elem)) {
           sum += Number(elem);
       }
   });
   return sum;
};

const runTests = () => {
    console.log(findAllDigitSum("abcd12efg9"));
    console.log(findAllDigitSum('w3resource'));
};

// Run test program
runTests();