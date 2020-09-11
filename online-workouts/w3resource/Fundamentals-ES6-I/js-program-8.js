// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Filter out the specified values from a specified array.                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const validateArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid argument type. Expected 'array' got '${typeof(arr)}'`);
    }
};

const doFiltering = (mainData, ...removes) => {
    validateArray(mainData);          // Must be an array.
    return mainData.filter((val) => {
        return removes.indexOf(val) < 0;
    });
};

const runTests = () => {
    console.log(doFiltering(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c'));
    console.log(doFiltering(['a', 'b', 'c', 'a', 'b', 'c'], 'b'));
};

// Run the test cases
runTests();