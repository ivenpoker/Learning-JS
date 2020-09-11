// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Calculates the sum of n + n/2 + n/4 + n/8 + ... where n is a positive integer   #
// #                     and all divisors are integer.                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let intSum = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num;
        num = Math.floor(num / 2);
    }
    return sum;
};

let runTests = () => {
    console.log(intSum(8));
    console.log(intSum(9));
    console.log(intSum(26));
};

runTests();