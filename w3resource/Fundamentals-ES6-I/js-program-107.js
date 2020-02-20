// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets all unique values (from the right side of the array) of an array, based on #
// #                     provided comparator function.                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const uniqueElementsByRight = (arr = [], func=f=>f) =>
    arr.reduceRight((acc, v) => {
        if (!acc.some((x) => func(x, v))) {
            acc.push(v);
        }
        return acc;
    }, []);

(() => {

    console.log(uniqueElementsByRight(
        [
            {id: 0, value: 'a'},
            {id: 1, value: 'b'},
            {id: 2, value: 'c'},
            {id: 1, value: 'd'},
            {id: 0, value: 'e'},
        ],
        (a, b) => a.id === b.id
    ));

})();