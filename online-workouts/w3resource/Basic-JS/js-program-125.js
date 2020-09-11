// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the longest string from a given array of strings.                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const findLongestString = (arr) => {
    if (!Array.isArray(arr))
        throw new TypeError(`Invalid argument type. Expected 'array' got '${typeof(arr)}'`);
    let longest = '';
    arr.forEach((elem) => {
        if (elem.length > longest.length) {
            longest = elem;
        }
    });
    return longest;
};

const runTests = () => {
    console.log(findLongestString(["ab", "a", "abcd"]));
    console.log(findLongestString(["ab", "ab", "ab"]));
};

// run test cases now
runTests();