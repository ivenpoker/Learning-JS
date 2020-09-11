// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Splits values into two groups according to predicate function, which specifies  #
// #                     which group an element in the input collection belongs to.                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const splitData = (arr = [], func = f => f) =>
    arr.reduce((acc, data) =>
        func(data) ?
            ({
                ...acc,
                groupA: [...acc.groupA, data]
            })
            :
            ({
                ...acc,
                groupB: [...acc.groupB, data]
            }),
        {groupA: [], groupB: []});

const runTests = () => {

    // Split data into evens and odds.
   console.log(splitData([1, 2, 3, 4, 5, 6, 7, 9, 10], (data) => data % 2 === 0));

   // Split data into positives and negatives.
   console.log(splitData([1, -1, 4, -5, -6, 8, 10, 14, -8], (data) => data >= 0));
};

runTests();