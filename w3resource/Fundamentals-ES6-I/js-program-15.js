// #########################################################################################################
// #                                                                                                       #
// #    Program Purpose: Finds the minimum-maximum value of an array, after applying the provided function #
// #                     to set comparing rule.                                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                             #
// #       Program Date: January 10, 2020.                                                                 #
// #                                                                                                       #
// #########################################################################################################

const findMinAndMAx = (arrayData, compFunc) => {
    if (!Array.isArray(arrayData)) {
        throw TypeError("Invalid first argument type. Must be an array");
    }
    return arrayData.reduce((acc, val) => compFunc(acc, val) ? acc : val);
};

const runTests = () => {
    console.log(findMinAndMAx([1, 3, 3, 10, 5, -3], (a, b) => a > b));              // finds the max value
    console.log(findMinAndMAx([1, -2, 4, 5, -3, 3, 6, 7], (a, b) => a < b));        // finds the min value
};

// Run test program
runTests();