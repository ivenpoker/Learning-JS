// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether two given integers are similar or not.                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 03, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let checkingNumbers = (x, y, divisor) => {
    return x % divisor === 0 && y % divisor === 0 || x % divisor !== 0
        && y % divisor !== 0;
};

let runTests = () => {
    console.log(checkingNumbers(10, 25, 5));
    console.log(checkingNumbers(10, 20, 5));
    console.log(checkingNumbers(10, 20, 4));
};

// Now let's run our test cases ....
runTests();