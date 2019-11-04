// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Moves the last 3 characters to the start of a given string. Length must be >=3. #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let isString = function (str) {
    return typeof (str) === 'string';
};

let moveLast3ToStartOfString = function (str) {
    if (!isString(str))
        throw new TypeError('Argument must be a string object');
    if (str.length < 3)
        throw new Error('String length must be >= 3');
    return str.slice(str.length-3).concat(str);
};

let runTestCases = function () {
    let strA = "First";
    let strB = "Second";

    console.log(`strA: ${strA} --> ${moveLast3ToStartOfString(strA)}`);
    console.log(`strB: ${strB} --> ${moveLast3ToStartOfString(strB)}`);
};

// Run test cases now....
runTestCases();