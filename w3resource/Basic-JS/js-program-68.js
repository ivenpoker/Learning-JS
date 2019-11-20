// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Create a new string taking the first and last n characters from a given string. #
//                       The string length must be >= n.                                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let isType = function (strVal, expectedType) {
    return typeof (strVal) ===  expectedType;
};

let doComputation = function (strA, nVal) {
    if (!isType(strA, 'string'))
        throw TypeError('Invalid first argument. Must be a string');
    if (!isType(nVal, 'number'))
        throw TypeError('Invalid second argument. Must be of type Number');
    if (strA.length <= nVal)
        throw TypeError(`String length must be > ${nVal}`);
    return strA.slice(0, nVal) + strA.slice(strA.length - nVal);
};

let runTests = function () {
    console.log(doComputation('JavaScript', 2));
    console.log(doComputation('JavaScript', 3));
};

// Run test for the script
runTests();