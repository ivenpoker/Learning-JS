// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Adds the two digits of a given positive integer of length two.                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let addTwoDigits = function (mainNum) {
    if (Number.isNaN(mainNum)) {
        throw new TypeError(`Invalid argument. Expected a number, got ${typeof (mainNum)}`);
    }
    let strVal = mainNum.toString();
    if (strVal.length !== 2) {
        throw new TypeError(`Invalid number. Must be 2 digits.`);
    }
    if (Number(strVal) < 0) {
        throw new TypeError(`Invalid number. Must be +ve.`);
    }
    let data = strVal.split('');
    return Number(data[0]) + Number(data[1]);
};

let runTests = function () {
    let valA = 23;
    let valB = 78;
    let valC = 92;

    console.log(`Processing ${valA} ... ${addTwoDigits(valA)}`);
    console.log(`Processing ${valB} ... ${addTwoDigits(valB)}`);
    console.log(`Processing ${valC} ... ${addTwoDigits(valC)}`);
};

// Run program tests
runTests();