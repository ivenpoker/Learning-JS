// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Program that gets an array with 'n' elements removed from the beginning from a  #
// #                     given array.                                                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const delFromBeginning = (data = [], end = 0) => data.slice(0, end);

(() => {

    console.log(delFromBeginning([1, 2, 3], 5));
    console.log(delFromBeginning([1, 2, 3], 0));

})();

