// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Filters out the non-unique values in an array.                                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 03, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const filterNonUniques = (arr = []) => {
    return arr.filter((val, i) => arr.indexOf(val) === arr.lastIndexOf(val))
};

const runTests = () => {
    console.log(filterNonUniques([1, 2, 2, 3, 4, 4, 5]));
    console.log(filterNonUniques([1, 2, 3, 4]));
};

runTests();