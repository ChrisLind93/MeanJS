var numArray1 = [1,2,3];
var numArray2 = [1,2,3];

function handleNumArrays(na1, na2, callback) {
    var newArray = [];

    for (var i = 0; i < na1.length; i++) {
        newArray.push(na1[i] + na2[i]);
    }
    callback(newArray);
}

function addComma(array) {
    console.log(array.join(", "));
}

function summarize(array) {
    var result1 = 0;
    for (var i in array) {
        result1 += array[i];
        i++;
    }
    console.log(result1);
}

function multiplies(array) {
    var result2 = 0;
    result2 = array.map(function(numberToDouble) {
        return numberToDouble * 10;
    })
    console.log(result2.join(", "));
}

handleNumArrays(numArray1, numArray2, addComma);
handleNumArrays(numArray1, numArray2, summarize);
handleNumArrays(numArray1, numArray2, multiplies);
