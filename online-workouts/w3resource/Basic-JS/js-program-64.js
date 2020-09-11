// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Concatenate two strings and return the result. If the length of the strings are #
// #                     not same then remove the characters from the longer string                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let isString = function (str) {
    return typeof(str) === 'string';
};

let concatenateTwoStrings = function (strA, strB) {
    if (!isString(strA) || !isString(strB))
        throw new TypeError('Invalid type for argument(s). Should be string objects');
    if (strA.length === strB.length) {
        return strA.concat(strB)
    } else {
        if (strA.length > strB.length) {
            return (strA.slice(strB.length)).concat(strB);
        } else {
            return (strB.slice(strA.length)).concat(strA);
        }
    }
};

let runTestCasesNow = function () {
    let strA = "String";
    let strB = "James";
    let strC = "king";

    console.log(`strA: ${strA} | strB: ${strB} --> ${concatenateTwoStrings(strA, strB)}`);
    console.log(`strC: ${strC} | strB: ${strC} --> ${concatenateTwoStrings(strB, strC)}`);
};

// Run the test case now...
runTestCasesNow();