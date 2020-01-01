// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds all the possible options to replace the hash in a string (Consists of     #
// #                     digits and one hash (#)) with a digit to produce an integer divisible by 3.     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 31, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let isDivisibleByKey = (someStr, key) => {
    let digits = someStr.split('');
    let finalDigits = [];

    let sum = 0;
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j < digits.length; j++) {
            if (digits[j] === '#' || digits[j] === '*')
                continue;
            sum += Number(digits[j]);
        }
        if ((sum + i) % key === 0) {
            finalDigits.push(digits.join('').replace('#', i));
        }
        sum = 0;
    }
    return finalDigits;
};

let runTests = () => {
    console.log(isDivisibleByKey("2#0", 3));
    console.log(isDivisibleByKey("4#2", 3));
};

// run sample test program
runTests();