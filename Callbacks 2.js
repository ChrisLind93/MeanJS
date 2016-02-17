var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function lengthOfNames(value) {
    if(value.length <= 3) {
        return value;
    }
}

function namesWithUppercase(value) {
    return value.toUpperCase();
}

function lengthOfNamesFilter(array, lengthOfNamesCallback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (lengthOfNamesCallback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function namesWithUppercaseMap(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

console.log(lengthOfNamesFilter(names, lengthOfNames));
console.log(namesWithUppercaseMap(names, namesWithUppercase));
