// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the number of elements which are present in 2 given arrays.               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const validateArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error(`Invalid argument type. Expected 'array' got '${typeof(arr)}'`);
    }
};

const findSameElements = (arrA, arrB) => {
    validateArray(arrA);
    validateArray(arrB);

    let sameNums = [];
    if (arrA.length > arrB.length) {
        arrA.forEach((elem) => {
            if (arrB.join('').indexOf(`${elem}`) >= 0) {
                if (sameNums.join('').indexOf(`${elem}`) < 0) {
                    sameNums.push(elem);
                }
            }
        });
    } else {
        arrB.forEach((elem) => {
            if (arrA.join('').indexOf(`${elem}`) >= 0) {
                if (sameNums.join('').indexOf(`${elem}`) < 0) {
                    sameNums.push(elem);
                }
            }
        });
    }
    return sameNums.length;
};

const runTests = () => {
    console.log(findSameElements([1, 2, 3, 4], [1, 2, 3, 4]));
    console.log(findSameElements([1, 2, 3, 4], [1, 2, 3, 5]));
    console.log(findSameElements([1, 2, 3, 4], [11, 22, 33, 44]));
};

// Run tests cases for this program
runTests();