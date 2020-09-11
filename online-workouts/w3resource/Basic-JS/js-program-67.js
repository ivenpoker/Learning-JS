// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a new string from a given string, removing the first and last           #
// #                     characters of the string if the first or last characters are 'P . Return        #
// #                     the original string if the condition is not satisfied.                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 20, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let isString = (temp) => {
    return typeof (temp) === "string";
};

let getNewString = (strVal) => {
    if (!isString(strVal))
        throw TypeError('Invalid argument type. Expect a string')
    if (strVal.length < 2)
        return strVal;
    return strVal[0] === 'P' && strVal[strVal.length-1] == 'P' ? strVal.slice(1, strVal.length-1) : strVal;
};

let runTest = function() {
    let testA = "PeterP";
    let testB = "JamesKing";
    let testC = "PythonP";

    console.log(`Test A: ${getNewString(testA)}`);
    console.log(`Test B: ${getNewString(testB)}`);
    console.log(`Test C: ${getNewString(testC)}`);
};

// Run the test programs
runTest();