// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the lowest index at which value should be inserted into array in order to  #
// #                     maintain its sorted order.                                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const findLowestIndex = (val, data = []) => {
    let lowestIndex = -1;
    try {
        Array(...data).sort((a, b) => a - b).forEach((elem, ind) => {
            if (elem > val) {
                lowestIndex = ind;
                throw true;
            }
        })
    } catch (err) {
        if (err) {
            return lowestIndex;
        }
    }
    return lowestIndex;
};

const sortdIndex = (arr = [], n) => {
    const isDescending = arr[0] > arr[arr.length-1];
    const index = arr.findIndex((el) => (isDescending ? n >= el : n <= el));
    return index === -1 ? arr.length : index;
};

(function () {
    const mainTestData = [1, 8, 11, -1, 5, 5, 6, 2, -19, 3, 15];
    console.log("Original data:", mainTestData);
    console.log("Sorted data:", mainTestData.sort((a, b) => a-b));
    console.log("Lowest index [first func]:", findLowestIndex(4, mainTestData));
    console.log("Lowest index [second func]:", sortdIndex(mainTestData, 4));
})();