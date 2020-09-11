// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets an array of function property names from own enumerable properties of an   #
// #                     object.                                                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const getFunctionPropertyNames = (obj = {}, inherited = false) =>
    (inherited ?
        [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
        :
        Object.keys(obj)
    ).filter((key) => typeof obj[key] === 'function');

const runTest = () => {
    function Foo() {
        this.a = () => 1;
        this.b = () => 2;
    }
    Foo.prototype.c = () => 3;
    console.log(getFunctionPropertyNames(new Foo()));
    console.log(getFunctionPropertyNames(new Foo(), true));
};

runTest();