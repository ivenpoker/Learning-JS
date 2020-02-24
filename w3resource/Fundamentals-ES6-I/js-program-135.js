// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the sum of the powers of all the numbers from start to end.                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 24, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const sumPower = (start = 1, end = 2, power = 1) =>
    Array(end + 1 - start).fill(0)
        .map((x, i) => Math.pow(i + start, power))
        .reduce((acc, val) => acc + val, 0);

(function () {

    console.log(sumPower(0, 10));
    console.log(sumPower(3, 10));
    console.log(sumPower(3, 10, 5));

})();