// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets an object containing the parameters of the current URL.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const getURLParameters = (url = '') => {
    if (!url.includes('?')) {
        return {};
    } else {
        let params = url.split('?');
        if (params.length !== 2) {
            return {};
        }
        params = params[1].split('&');
        return params.reduce((acc, param) =>
            ({
                ...acc,
                [param.split('=')[0]]: param.split('=')[1]
            }), {})
    }
};

const anotherGetURLParameters = (url = '') =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
        {}
    );

const runTests = () => {
    console.log(getURLParameters('http://url.com/page?name=Adam&surname=Smith'));
    console.log(getURLParameters('google.com'));
    console.log(getURLParameters('https://www.w3resource.com'));

    console.log('==============================================');

    console.log(anotherGetURLParameters('http://url.com/page?name=Adam&surname=Smith'));
    console.log(anotherGetURLParameters('google.com'));
    console.log(anotherGetURLParameters('https://www.w3resource.com'));

};

runTests();