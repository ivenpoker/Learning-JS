
// #########################################################################################################
// #                                                                                                       #
// #    Program Purpose: Find the maximum difference among all possible pairs of a given array of integers.#
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                             #
// #       Program Date: December 26, 2019.                                                                #
// #                                                                                                       #
// #########################################################################################################

let findArrayMaxDiff = (arr) => {
    if (!Array.isArray(arr))
        throw new Error(`Invalid argument type. Expected 'array' type, got '${typeof(arr)}'`);
    let maxResult = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k !== i && k < arr.length; k++) {
            let diff = Math.abs(arr[i] - arr[k]);
            maxResult = Math.max(maxResult, diff);
        }
    }
    return maxResult;
};

let runTests = () => {
    console.log(findArrayMaxDiff([1, 2, 3, 8, 9]));
    console.log(findArrayMaxDiff([1, 2, 3, 18, 9]));
    console.log(findArrayMaxDiff([13, 2, 3, 8, 9]));
};

// Run the test cases
runTests();