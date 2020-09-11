// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Spits values into two groups, if an element in filter is truthy, the            #
// #                     corresponding element in the collection belongs to the first group; otherwise   #
// #                     it belongs to the second group.                                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const bifurcate = (arr, filter) =>
    arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

const runTest = () => {
    console.log(bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])) ;
};

runTest();