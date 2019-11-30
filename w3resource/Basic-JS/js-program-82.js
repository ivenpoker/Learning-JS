// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Adds two positive integers without carry.                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let addTwoIntegersWithoutCarrying = function (n1, n2) {
    let result = 0;
    let x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x *= 10;
    }
    return result;
};

let runTests = function () {
     console.log(addTwoIntegersWithoutCarrying(222, 911));
     console.log(addTwoIntegersWithoutCarrying(200, 900));
};

// Run test cases
runTests();