// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Computes the sum of two parts and store into an array of size two.              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doComputations = function (data) {
    let firstHalve = data.filter(function (val, ind) {
        return ind % 2 === 0;
    });
    let secondHalve = data.filter(function (val, ind) {
        return ind % 2 !== 0;
    });
    let info = {fstSum: 0, sndSum: 0};
    firstHalve.forEach(function (val) {
        info.fstSum += val;
    });
    secondHalve.forEach(function (val) {
        info.sndSum += val;
    });
    return [info.fstSum, info.sndSum];
};

let runTests = function () {
    let testA = [1, 4, 5, 9, -1, 5, 3, 4, 7, 8];
    let testB = [-1, -5, 6, 8, 3, 2, 8, -5];
    let testC = [1, 3, 6, 2, 5, 10];

    let resultA = doComputations(testA);
    let resultB = doComputations(testB);
    let resultC = doComputations(testC);

    console.log(`Processing [${testA}] .... [sumA: ${resultA[0]}, sumB: ${resultA[1]}]`);
    console.log(`Processing [${testB}] .... [sumA: ${resultB[0]}, sumB: ${resultB[1]}]`);
    console.log(`Processing [${testC}] .... [sumA: ${resultC[0]}, sumB: ${resultC[1]}]`);
};

// Run the test cases ....
runTests();