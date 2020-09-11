// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Obtains a random element from an array.                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const randomElem = (data = []) => data[Math.floor(Math.random() * data.length)];

(function () {

    console.log("Sample random element:", randomElem([10, 5, 8, 3, 1, -4, 3, -6]));

})();
