// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Initializes an array containing the numbers in the specified range where start  #
// #                     and end are inclusive with their common difference step.                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const initArrayInRange = (start = 0, end = 0, step = 1) =>
    start <= end ?
        Array(end - start).fill(0).map((_) => {
            let temp = start;
            start += step;
            return temp <= end ? temp : null;
        }).filter((val) => val !== null)
        :
        [];

const runTest = () => {
    console.log(initArrayInRange(1, 10, 2));
    console.log(initArrayInRange(10, 20, 1));
    console.log(initArrayInRange(1, 10, 3));
    console.log(initArrayInRange(1, 10));
};

runTest();