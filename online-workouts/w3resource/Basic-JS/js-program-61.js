// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Concatenates two string except their first characters.                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let isString = function (strVal) {
    return typeof (strVal) == 'string';
};

let isEmpty = function (str) {
    return str.length === 0;
};

let concatTwoStingsRemoveFirstChar = function (strA, strB) {
    if (!isString(strA) || !isString(strB))
        throw new TypeError('Arguments must be strings');
    if (isEmpty(strA)) return strB.slice(1);
    if (isEmpty(strB)) return strA.slice(1);

    return strA.slice(1).concat(strB.slice(1));
};

let runTestCases = function () {
    let strA = "Testing";
    let strB = "";
    let strC = "king";

    console.log(`strA: ${strA} | strB: ${strB} | --> ${concatTwoStingsRemoveFirstChar(strA, strB)}`);
    console.log(`strA: ${strA} | strC: ${strC} | --> ${concatTwoStingsRemoveFirstChar(strA, strC)}`);
};

// Run the test cases now...
runTestCases();