// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Groups the elements of a given array based on the given function.               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const groupElementsByFunction = (data = [], func = f => f) =>
    data.reduce((acc, val) =>
        func(val) ?
            ({
                ...acc,
                groupA: [...acc.groupA, val],
            })
            :
            ({
                ...acc,
                groupB: [...acc.groupB, val]
            }), {groupA: [], groupB: []});

const runTests = () => {

    // group into evens and odds
    console.log(groupElementsByFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (val) => val % 2));

    // group into negatives and positives
    console.log(groupElementsByFunction([1, 2, -3, 4, -5, 6, 7, -8, 9, -10], (val) => val >= 0));
};

runTests();