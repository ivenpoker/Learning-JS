// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether two arrays of integers of same length are similar or not. The    #
// #                     arrays will be similar if one array can be obtained from another array by       #
// #                     swapping at most one pair of elements.                                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let arrayChecking = function (arrayA, arrayB) {

    if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
        throw new TypeError(`Invalid argument(s) type(s). Must all be arrays.`);
    }

    for (let i = 0; i < arrayA.length; i++) {
        for (let j = i; j < arrayB.length; j++) {
            let result = true;
            let temp = arrayA[i];
            arrayA[i] = arrayA[j];
            arrayA[j] = temp;
            for (let k = 0; k < arrayA.length; k++) {
                if (arrayA[k] !== arrayB[k]) {
                    result = false;
                    break;
                }
            }
            if (result) {
                return true;
            }
            arrayA[j] = arrayA[i];
            arrayA[i] = temp;
        }
    }
    return false;
};

let runTests = function () {
    console.log(arrayChecking([10, 20, 30], [10, 20, 30]));
    console.log(arrayChecking([10, 20, 30], [30, 10, 20]));
    console.log(arrayChecking([10, 20, 30, 40], [10, 30, 20, 40]));
};

// Run tests now ....
runTests();