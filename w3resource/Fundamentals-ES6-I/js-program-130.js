// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets removed elements from the end of a given array until the passed function   #
// #                     returns true.                                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const delElemsFromEnd = (data = [], n = 0) => data.slice(-n);

(() => {

    console.log(delElemsFromEnd([1, 2, 3], 2));
    console.log(delElemsFromEnd([1, 2, 3]));
    console.log(delElemsFromEnd([1, 2, 3, 4, 5, 6], 3));

})();