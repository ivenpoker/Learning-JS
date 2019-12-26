// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Replace all the numbers with a specified number of a given array of integers.   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let makeAllArrayReplacements = (arr, oldVal, newVal) => {
    if (!Array.isArray(arr)) {
        throw new Error(`Invalid first argument type. Expected an 'array', got '${typeof(arr)}'`);
    }
    return arr.map(function (elem) {
        return elem === oldVal ? newVal : elem;
    });
};

let runTests = () => {
    let testData = [1, 2, 3, 2, 2, 8, 1, 8];
    console.log(`   Original array: [${testData}]`);
    console.log(`After replacement: [${makeAllArrayReplacements(testData, 2, 5)}]`);
};

// Run the test cases
runTests();