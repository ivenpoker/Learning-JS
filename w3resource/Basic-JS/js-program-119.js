// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a given integer has increasing digits sequence.                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const isSequenceIncreasing = (digits) => {
    let digitsArr = `${digits}`.split('');   // split into individual digits (as strings)

    digitsArr = digitsArr.map((val) => Number(val));

    for (let i = 0; i < digitsArr.length; i++) {
        if (digitsArr[i] >=  digitsArr[i+1]) {
            return false;
        }
    }
    return true;
};

const runTests = () => {
    console.log(isSequenceIncreasing(123));
    console.log(isSequenceIncreasing(1223));
    console.log(isSequenceIncreasing(45677));
};

// run test program now.
runTests();