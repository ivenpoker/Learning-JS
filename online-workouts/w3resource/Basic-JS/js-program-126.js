// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the largest even number from an array of integers.                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const getLargestEven = (arr) => {
    if (!Array.isArray(arr))
        throw new TypeError(`Invalid argument type. Expected 'array' got '${typeof(arr)}'`);
    let largest = Number.NEGATIVE_INFINITY;
    arr.forEach((elem) => {
        if (elem % 2 === 0 && elem > largest) {
            largest = elem;
        }
    });
    return largest;
};

const runTests = () => {
    console.log(getLargestEven([20, 40, 200]));
    console.log(getLargestEven([20, 40, 200, 301]));
};

// Run the test cases now.
runTests();