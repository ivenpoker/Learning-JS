// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Performs a deep comparison between two values to determine if they are          #
// #                     equivalent.                                                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const equals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equals(a[k], b[k]));
};

const runTests = () => {
    console.log(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));
};

runTests();