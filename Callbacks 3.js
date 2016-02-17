var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    for (var i = 0, max = this.length; i < max; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (var i = 0, max = this.length; i < max; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
};

function getShort(value) {
    return value.length <= 3;
}

function getUppercase(value) {
    return value.toUpperCase();
}

console.log(names.myFilter(getShort));
console.log(names.myMap(getUppercase));
