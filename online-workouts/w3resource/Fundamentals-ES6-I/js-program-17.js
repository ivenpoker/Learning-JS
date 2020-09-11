// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Split values of two given arrays into two groups, based on some function.       @
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 10, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const validateArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw TypeError(`Expected 'array' got '${typeof(arr)}'`);
    }
};

const doSplitting = (arrA, arrB, func) => {
    validateArray(arrA);
    validateArray(arrB);

    let data = {};
    if (typeof(func) === 'function') {
        arrA.map((val) => {
            if (func(val)) {
                if (data.groupA) {
                    data.groupA.push(val);
                } else {
                    data.groupA = [val];
                }
            } else {
                if (data.groupB) {
                    data.groupB.push(val);
                } else {
                    data.groupB = [val];
                }
            }
        });
    } else {
        throw TypeError(`Expected 'function' got '${typeof(func)}'`)
    }
    return data;
};

const runTests = () => {

    // group dat into even items and odd items.
    console.log(doSplitting([1, 2, 3, 4, 5, 5], [5, 4, 3, 1, 8], (x) => x % 2 === 0));

};

// Run test cases.
runTests();