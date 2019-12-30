// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the number of even values in sequence before the first occurrence of a    #
// #                     given number.                                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let findNumberOfEvens = (arr, beforeVal) => {
    if (!Array.isArray(arr))
        throw new TypeError(`Invalid first type argument. Expected type of 'array' got ${typeof(arr)}`);
    let evenCnt = 0;
    try {
        arr.forEach((val) => {
            if (val === beforeVal) {
                throw new Error();  // used to exit forEach
            } else if (val % 2 === 0) {
                evenCnt += 1;
            }
        });
    } catch (err) {
        // ignore the error
    }
    return evenCnt;
};

let runTests = () => {
    console.log(findNumberOfEvens([1, 2, 3, 4, 5, 6, 7, 8], 5));
    console.log(findNumberOfEvens([1, 3, 5, 6, 7, 8], 6));
};

// Run test program
runTests();