// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the median of an array of numbers.                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const findMedian = (someArr = []) => {
    const sortedData = [...someArr].sort();
    const mid = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 !== 0) {
        return sortedData[mid];
    } else {
        return (sortedData[mid] + sortedData[mid-1]) / 2;
    }
};

(() => {

    console.log(findMedian([1, 2, 3, 4, 5, 6, 7]));
    console.log(findMedian([10, 5, 19, 3, 3, 1]));

})();