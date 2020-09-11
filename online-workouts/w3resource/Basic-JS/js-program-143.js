// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Sorts the strings of a given array of strings in the order of increasing        #
// #                     lengths                                                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const sortStrings = (arrStr) => {
    if (!Array.isArray(arrStr)) {
        throw new TypeError(`Invalid argument Type. Expected 'array' got '${typeof(arrStr)}'`);
    }
    arrStr.sort((a, b) => a.length - b.length);
    return arrStr;
};

const runTests = () => {
    let data = ['xyz', 'acd', 'aa', 'bb', 'zzz', '', 'a', 'b'];
    console.log(`Original array: ${data}`);
    console.log(`  Sorted array: ${sortStrings(data)}`)
};

// Run test program
runTests();