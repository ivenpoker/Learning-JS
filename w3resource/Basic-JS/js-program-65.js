// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Test if a string end with "Script". The string length must be greater or        #
// #                     equal to 6.                                                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let mainStr = "Script";

let isString = function (str) {
    return typeof(str) === 'string';
};

let endsWithSpecifiedString = function (str) {
    if (!isString(str))
        throw new TypeError('Invalid argument(s) type. Most all be string objects');
    if (str.length < mainStr.length)
        throw new TypeError(`Main string must be >= ${mainStr.length}`);

    return str.slice(str.length - mainStr.length) === mainStr;
};

let runTestCases = function () {
    let testA = 'JavaScript';
    let testB = 'Javascript';
    let testC = 'Java Script';

    console.log(`Testing string: '${testA}' --> ${endsWithSpecifiedString(testA)}`);
    console.log(`Testing string: '${testB}' --> ${endsWithSpecifiedString(testB)}`);
    console.log(`Testing string: '${testC}' --> ${endsWithSpecifiedString(testC)}`);
};

// Run test cases now.....
runTestCases();