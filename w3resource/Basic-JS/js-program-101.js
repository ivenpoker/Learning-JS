// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a given string contains only latin letters and no two uppercase  #
// #                     and no two lowercase letters are in adjacent positions.                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let testString = (inputStr) => {
    let isLowerCase = (symbol) => {
       return (symbol === symbol.toLowerCase());
    };
    let isUpperCase = (symbol) => {
        return (symbol === symbol.toUpperCase());
    };
    let isFirstCharLower = isLowerCase(inputStr[0]);
    let isFirstCharUpper = isUpperCase(inputStr[0]);

    if (!(isFirstCharLower || isFirstCharUpper)) {
        return false;
    } else {

        for (let i = 1; i < inputStr.length; i++) {
            if (i % 2) {
                if (isLowerCase(inputStr[i]) === isFirstCharLower ||
                    isUpperCase(inputStr[i]) === isFirstCharUpper) {
                    return false;
                }
            } else {
                if (isLowerCase(inputStr[i]) !== isFirstCharLower ||
                    isUpperCase(inputStr[i]) !== isFirstCharUpper) {
                    return false;
                }
            }
        }
        return true;
    }
};

let runTests = () => {
    console.log(testString("xYr"));
    console.log(testString('XXyx'));
};

// Run test cases...

runTests();