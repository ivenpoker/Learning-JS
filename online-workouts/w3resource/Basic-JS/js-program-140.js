// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Check whether all the digits in a given number are the same or not.             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const areDigitsUnique = (num) => {
    if (Number.isNaN(num)) {
        throw new TypeError(`Invalid argument. Expected 'number' got '${typeof(num)}'`);
    }
    let digits = `${num}`.split('');
    if (digits.length === 1) return true;
    for (let i = 1; i < digits.length; i++) {
        if (digits[i-1] !== digits[i]) {
            return false;
        }
    }
    return true;
};

const runTests = () => {
    console.log(areDigitsUnique(1234));
    console.log(areDigitsUnique(1111));
    console.log(areDigitsUnique(2222222222));
};

// Run test program
runTests();