// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets all unique values of an array, based on a provided comparator function.    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const uniqueElementsBy = (arr = [], func=f=>f) =>
    arr.reduce((acc, val) => {
        if (!acc.some((x) => func(val, x))) {
            acc.push(val);
        }
        return acc;
    }, []);

(() => {

    console.log(uniqueElementsBy(
        [
            {id: 0, value: 'a'},
            {id: 1, value: 'b'},
            {id: 2, value: 'c'},
            {id: 1, value: 'd'},
            {id: 0, value: 'e'}
        ],
        (a, b) => a.id === b.id
    ));

})();
