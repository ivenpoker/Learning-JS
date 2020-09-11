// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes the key-value pairs corresponding to the given keys from an object.     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const removeKeyPair = (obj = {}, keys = []) =>
    Object.keys(obj).filter((key) => !keys.includes(key)).reduce((acc, key) =>
        ({
            ...acc,
            [key]: obj[key]
        }), {});

const runTest = () => {
    const person = {
        firstName: 'James',
        lastName: 'King',
        userName: 'deathshot',
    };
    console.log('Original Object => ', person);
    console.log("Removing 'firstName' => ", removeKeyPair(person, ['firstName']));
    console.log("Removing 'lastName'  => ", removeKeyPair(person, ['lastName']));
    console.log("Removing 'userName'  => ", removeKeyPair(person, ['userName']));

    console.log("\nFinal 'person' object:", person);
};

runTest();