// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets every element that exists in any of the two arrays once.                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const unflattenObject = obj =>
    Object.keys(obj).reduce((acc, k) => {
        if (k.indexOf('.') !== -1) {
            const keys = k.split('.');
            Object.assign(
                acc,
                JSON.parse(
                    '{' +
                    keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
                    obj[k] +
                    '}'.repeat(keys.length)
                )
            );
        } else acc[k] = obj[k];
        return acc;
    }, {});

(() => {

    console.log(unflattenObject({'a.b.c':1, d: 1}));

})();
