// #####################################################################################################
// #                                                                                                   #
// #    Program Purpose: Check two given integer values and return true if one of the number is 15 or  #
// #                     if their sum or difference is 15.                                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                         #
// #       Program Date: September 27, 2019.                                                           #
// #                                                                                                   #
// #####################################################################################################

let checkSumOrDiffOrNum = (valA, valB) => {
    if (valA === 15 || valB === 15) return true;
    return valA + valB === 15 || Math.abs(valA - valB) === 15;
};

let getRandomInRange = (low, upper) => {
    return Math.floor(low + Math.random() * upper)
};

let runTests = (maxTimes) => {
    for (let x = 0; x < maxTimes; x++) {
        let randValA = getRandomInRange(3, 15);
        let randValB = getRandomInRange(3, 15);
        console.log(`Test #${x+1} -> RandA: ${randValA} & RandB: ${randValB}. Passes test: ${checkSumOrDiffOrNum(randValA, randValB) ? "YES" : "NO"}`);
    }
};

// Testing the function now...
runTests(20);           // run test for 20 random data.