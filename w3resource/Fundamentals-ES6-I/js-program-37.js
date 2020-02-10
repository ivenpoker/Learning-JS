// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a sorted array of objects ordered by properties and orders.                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const orderBy = (arr, props, orders) =>
    [...arr].sort((a, b) =>
        props.reduce((acc, prop, i) => {
            if (acc === 0) {
                const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
                acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
            }
            return acc;
        }, 0)
    );

const runTests = () => {
    const users = [
        {name: 'fred', age: 48},
        {name: 'barney', age: 36},
        {name: 'fred', age: 40}
    ];
    console.log(orderBy(users, ['name', 'age'], ['asc', 'desc']));
    console.log(orderBy(users, ['name', 'age']));
};

runTests();