// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Targets a given value in a nested JSON object, based on the given key.          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const dig = (obj, target) => {
    return target in obj ? obj[target]
        : Object.values(obj).reduce((acc, val) => {
            if (acc !== undefined) {
                return acc;
            }
            if (typeof(val) === 'object') {
                return dig(val, target);
            }
        }, undefined);
};

const runTests = () => {
    const data = {
        level1: {
            level2: {
                level3: 'some data'
            }
        }
    };
    const dog = {
        'status': 'success',
        'message': 'https//invalidURL.com/'
    };
    console.log(dig(data, 'level3'));
    console.log(dig(data, 'level4'));
    console.log(dig(dog, 'message'));
};

// Run test case for script program
runTests();