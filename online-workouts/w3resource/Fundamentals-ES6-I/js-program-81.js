// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an object with keys generated by running the provided function for each #
// #                     key and the same values as the provided object.                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const mapKeys = (mainObj = {}, func = f => f) =>
    Object.keys(mainObj).map((val, i) => func ? func(val, i) : val)
        .reduce((acc, modKey) =>
                ({
                    ...acc,
                    [modKey]: mainObj[Object.keys(mainObj).filter((key) => modKey.indexOf(key) >= 0)[0]]
                })
        , {});

// TESTING THE CODE.

(() => {

    console.log(mapKeys({a:1, b:2}, (val, key) => val + key));

})();