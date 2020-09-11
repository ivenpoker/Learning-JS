// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the highest index at which a value should be inserted into the array in    #
// #                     order to maintain its sorted order.                                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const findHighestIndex = (val, data = []) => {
    let highestInd = -1;
    try {
        Array(...data).sort((a, b) => a - b).forEach((elem, ind) => {
            if (elem > val) {
                highestInd = ind;
                throw true;
            }
        });
    } catch (err) {
        if (err) {
            return highestInd;
        }
    }
    return highestInd;
};

const sortedLastIndex = (arr = [], n) => {
    const isDescending = arr[0] > arr[arr.length - 1];
    const index = arr.reverse().findIndex((elem) => (isDescending ? n <= elem : n >= elem));
    return index === -1 ? 0 : arr.length - index;
};

(function () {
    let originalArray = [1, 2, 7, 8, 5, 10, 12, -3, -4, -5, 6];
    console.log('Original array:', originalArray.sort((a, b) => a - b));
    console.log("Highest index [first func]:", findHighestIndex(0, originalArray));
    console.log("Highest index [second func]:", sortedLastIndex(originalArray, 0));

})();