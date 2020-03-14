// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the highest index at which value should be inserted into array in order to #
// #                     maintain it's sorted order, based on a provided iterator function.              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 03, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const sortedLastIndexBy = (arr = [], n = 1, func=f=>f) => {
    const isDescending = func(arr[0]) > func(arr[arr.length -1]);
    const val = func(n);
    const index = arr.map(func).reverse().findIndex((el) => isDescending ? val <= el : val >= el);
    return index === -1 ? 0 : arr.length - index;
};

(function () {

    console.log(sortedLastIndexBy([{x:4}, {x:5}], {x:4}, o => o.x));

})();