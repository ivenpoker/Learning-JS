// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Retrieves a set of properties indicated by the given selectors from an object.  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const get = (from, ...selectors) =>
    [...selectors].map((s) =>
        s.replace(/\[([^\[\]]*)]/g, '.$1.')
            .split('.')
            .filter((t) => t !== ' ')
            .reduce((prev, cur) => prev && prev[cur], from)
    );

const runTests = () => {
    const obj = {
        selector: {
            to: {
                val: 'val to select'
            }
        },
        target: [1, 2, {a : 'test'}]
    };
    console.log(get(obj, 'selector.to.val', 'target[0]', 'target[2].a'));
};

runTests();