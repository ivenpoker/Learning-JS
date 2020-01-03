// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Swap two halves of a given array of integers of even length.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const swapArrayHalves = (someArr) => {
    if (!Array.isArray(someArr)) {
        throw new TypeError(`Invalid argument type. Expected 'array' got '${typeof(someArr)}'`);
    }
    if ((someArr.length % 2) !== 0) {
        return false;         // work only with array of even length.
    }
    for (let i = 0; i < someArr.length / 2; i++) {
        let temp = someArr[i];
        someArr[i] = someArr[i + someArr.length / 2];
        someArr[i + someArr.length / 2] = temp;
    }
    return someArr;
};

const runTests = () => {
    console.log(swapArrayHalves([1,2,3,4,5,6]));
    console.log(swapArrayHalves([1,2,3,4,5,6,7]));
};

// Run test program now.
runTests();