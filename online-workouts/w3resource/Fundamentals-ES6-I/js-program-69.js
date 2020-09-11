// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Groups element of an array based on the given function and returns the count of #
// #                     elements in each group.                                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const groupData = (arr = [], func = f => f) => {
    const data = arr.reduce((acc, val) =>
        func(val) ?
            ({
                ...acc,
                groupA: [...acc.groupA, val]
            }) :
            ({
                ...acc,
                groupB: [...acc.groupB, val]
            }),
        {groupA: [], groupB: []});
    return {groupA_len: data.groupA.length, groupB_len: data.groupB.length};
};

const runTests = () => {
    console.log(groupData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (val) => val % 2 === 0));
};

runTests();