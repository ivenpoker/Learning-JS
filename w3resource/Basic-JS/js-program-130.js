// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the number of even digits in a given integer.                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const findNumberOfEvenDigits = (num) => {
    let numStr = `${num}`.split('');
    let cnt = 0;
    numStr.forEach((elem) => {
        if (Number(elem) % 2 === 0) {
            cnt++;          // found an even digit
        }
    });
    return cnt;
};

const runTests = () => {
    console.log(findNumberOfEvenDigits(123));
    console.log(findNumberOfEvenDigits(1020));
    console.log(findNumberOfEvenDigits(102));
};

// Run test program
runTests();