// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a deep clone of an object.                                              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const deepClone = (obj) => {
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
        (key) => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};

// RUN TESTS

(() => {

    const a = {foo: 'bar', obj: {a: 1, b: 2}};
    const b = deepClone(a);

    console.log('a:', a);
    console.log('b:', b);

})();
