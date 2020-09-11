// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Picks the key-value pairs corresponding to the given keys from an object.       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const pickKeyValuePairs = (data = {}, keys = []) =>
    Object.keys(data).reduce((acc, key) =>
        keys.includes(key) ?
            ({
                ...acc,
                [key]: data[key]
            })
            :
            acc
    , {});

(() => {

    const obj = {
        a: 1,
        b: '2',
        c: 3
    };
    console.log(pickKeyValuePairs(obj, ['a', 'c']));

})();