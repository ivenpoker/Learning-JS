// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Serializes a cookie name-value pair into a Set-cookie header string.            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################


const serializeCookie = (name, val) =>
    `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

(function () {

    console.log("Serialized data:", serializeCookie("foo", "bar"));

})();

