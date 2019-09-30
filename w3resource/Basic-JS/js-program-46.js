// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Checks if two given non-negative integers and if one of the number (not both)  #
// #                     is multiple of 7 or 11.                                                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 30, 2019.                                                            #
// #                                                                                                    #
// ######################################################################################################

let getRandomRange = (lower, upper) => {
    return Math.floor(lower + Math.random() * upper);
};

let isNegative = (someVal) => {
    return someVal < 0;
};

let checkConditions = (valA, valB) => {
    if (isNegative(valA) || isNegative(valB))
        throw TypeError("Invalid argument(s). Only positive numbers accepted");
    return (valA % 7 === 0 || valB % 11 === 0) && !(valA % 7 === 0 && valB % 11);
};

let runTest = (maxTimes) => {
    for (let x = 0; x < maxTimes; x++) {
        let randValA = getRandomRange(3, 15);
        let randValB = getRandomRange(3, 15);
        console.log(`Test #${x+1} -> RandA: ${randValA} & RandB: ${randValB}. Passes test: ${checkConditions(randValA, randValB) ? "YES" : "NO"}`);
    }
};

// Testing the program now...
runTest(20);