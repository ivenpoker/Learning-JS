// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an object composed of the properties the given function returns truthy  #
// #                     for.                                                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const createObjFromFunc = (mainObj = {}, func = (v) => true) =>
    Object.keys(mainObj).reduce((acc, key) =>
        func(mainObj[key]) ?
            ({
                ...acc,
                [key]: mainObj[key]
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
    console.log(createObjFromFunc(obj, (x) => typeof (x) === 'number'));

})();
