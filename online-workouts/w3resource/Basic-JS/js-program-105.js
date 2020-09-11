// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the number of times to replace a given number with the sum of its digits   #
// #                     until it converts to a single digit number.                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let digitToOne = (mainNum) => {
    if (Number.isNaN(mainNum))
        throw new Error(`Invalid first argument type. Expected an 'array', got '${typeof(mainNum)}'`);
    let len = `${mainNum}`.length;
    if (len === 1) {
        return mainNum
    } else {
        let cnt = 1;
        while (len !== 1) {
            let tempVals = `${mainNum}`.split('').map(function (val) {
                return Number(val)
            });
            let sum = 0;
            tempVals.forEach(function (val) {
                sum += val;
            });
            if (`${sum}`.length !== 1) {
                mainNum = sum;
                cnt++;
            } else {
                return cnt;
            }
        }
    }
};

let runTests = () => {
    console.log(digitToOne(123));
    console.log(digitToOne(156));
};

// Run the tests cases
runTests();