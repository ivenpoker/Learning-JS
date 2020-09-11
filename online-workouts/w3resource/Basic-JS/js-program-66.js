// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a string starts with 'New' or 'Los'                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 4, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################

let mainA = "New";
let mainB = "Los";
let isString = function (str) {
    return typeof (str) === 'string';
};

let checkStringStart = function (str) {
    if (!isString(str))
        throw new TypeError("Invalid argument type. Must be a string object");
    return str.length >= 3 ? str.slice(0, 3) === mainA || str.slice(0, 3) === mainB : false
};

let runMainTest = function () {
    let strA = "New York";
    let strB = "Los Angeles";
    let strC = "London";

    console.log(`strA: ${strA} ---> ${checkStringStart(strA)}`);
    console.log(`strB: ${strB} ---> ${checkStringStart(strB)}`);
    console.log(`strC: ${strC} ---> ${checkStringStart(strC)}`);
};

// Run the test cases

runMainTest();