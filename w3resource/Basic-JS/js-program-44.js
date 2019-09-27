// #####################################################################################################
// #                                                                                                   #
// #    Program Purpose: Check from three given integers that if a number is greater than or equal to  #
// #                     20 and less than one of the others.                                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                         #
// #       Program Date: September 27, 2019.                                                           #
// #                                                                                                   #
// #####################################################################################################

let isNegative = (num) => {return num < 0};

let checkIntegerValues = (valA, valB, valC) => {
    if (isNegative(valA) || isNegative(valB) || isNegative(valC))
        throw new TypeError("Invalid argument types. Must be +ve integers");
    if (valA >= 20 && (valA < valB || valA < valC)) return true;
    if (valB >= 20 && (valB < valA || valB < valC)) return true;
    return valC >= 20 && (valC < valA || valC < valB);
};

let getRandomInRange = (lower, upper) => {return Math.floor(lower + Math.random() * upper)};

let runTests = (maxTimes) => {
    for (let x = 0; x < maxTimes; x++) {
        let valA = getRandomInRange(10, 15);
        let valB = getRandomInRange(10, 15);
        let valC = getRandomInRange(10, 15);
        console.log(`Test #${x+1} on [${valA}, ${valB}, ${valC}]... Does test pass ?: ${checkIntegerValues(valA, valB, valC) ? "YES" : "NO"}`);
    }
};

// Testing the application now....
runTests(20);           // run the test for 20 random data.