// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the symmetric difference between two given arrays.                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 24, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const symmetricDifference = (arrA = [], arrB = []) => {
    const setA = new Set(arrA);
    const setB = new Set(arrB);

    return [...arrA.filter((val) => !setB.has(val)), ...arrB.filter((val) => !setA.has(val))];
};

(function () {

    console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

})();