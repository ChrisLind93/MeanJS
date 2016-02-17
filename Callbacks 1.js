var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function lengthOfNames(value) {
    if(value.length <= 3) {
        return value;
    }
}

function namesWithUppercase(value) {
    return value.toUpperCase();
}

console.log(names.filter(lengthOfNames));
console.log(names.map(namesWithUppercase));
