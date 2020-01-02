// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a given fraction is proper or not.                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const properImproperTest = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid argument type. Expected 'array' got '${typeof(arr)}'`);
    }
    if (arr.length !== 2) {
        throw new Error(`Invalid number of elements in array. Expected 2 got ${arr.length}`);
    }
    return Math.abs(arr[0] / arr[1]) < 1 ? "Proper fraction" : "Improper fraction";
};

const runTests = () => {
    console.log(properImproperTest([12, 300]));
    console.log(properImproperTest([2, 4]));
    console.log(properImproperTest([103, 4]));
    console.log(properImproperTest([104, 2]));
    console.log(properImproperTest([5, 40]));
};

// Run tests cases
runTests();