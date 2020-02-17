// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Filters an array of objects based on a condition while also filtering out       #
// #                     unspecified keys.                                                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const reduceFilter = (data = {}, keys = [], func=f=>f) =>
    data.filter(func).map((elem) => keys.reduce((acc, key) =>
        ({
            ...acc,
            [key]: elem[key]
        }), {})
    );

(() => {

    const data = [
        {id: 1, name: 'John', age: 24},
        {id: 2, name: 'Mike', age: 50}
    ];

    console.log(reduceFilter(data, ['id', 'name'], (item) => item.age > 24));

})();