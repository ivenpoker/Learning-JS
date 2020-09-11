// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Performs stable sorting of an array, preserving the initial indexes of items    #
// #                     when their values are the same.                                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 03, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const stableSort = (arr = [], compare=f=>f) =>
    arr.map((item, index) => ({item, index}))
        .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
        .map(({item}) => item);

(function () {

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(stableSort(arr, () => 0));

})();