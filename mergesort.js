function split(wholeArray) {
    var firstHalf;
    var secondHalf;
    var midway = Math.round(wholeArray.length/2)
    firstHalf = wholeArray.slice(0, midway);
    console.log(firstHalf);
    secondHalf = wholeArray.slice(midway);
    console.log(secondHalf);
    return [firstHalf, secondHalf]
}

function merge(arr1, arr2) {
    var mergedArray = [];
    var arrOne = arr1;
    var arrTwo = arr2;
    // if first element of arr1 < first element of arr2
    while (arrOne.length > 0 || arrTwo.length > 0) {
        if (arrOne.length === 0) {
            arrTwo.forEach(function (index) {
                mergedArray.push(index)
            });
            arrTwo = [];
        } else if (arrTwo.length === 0) {
            arrOne.forEach(function(index) {
                mergedArray.push(index)
            });
            arrOne = [];
        } else {
            if (arrOne[0] < arrTwo[0]) {
                mergedArray.push(arrOne[0]);
                arrOne.shift();
            } else {
                mergedArray.push(arrTwo[0]);
                arrTwo.shift();
            }
        }
    }
    // shift it and push it into mergedArray 
    return mergedArray
}

function mergeSort(array) {
    var sortedArray = array;
    var splitArray = [];
    //splits array as much as possible
    sortedArray= split(sortedArray);
    for (var = i; i < sortedArray.length; i++) {
        if (sortedArray[i].length > 1) {
            var whatever = split(sortedArray[i])
            splitArray.push(whatever[0])
            splitArray.push(whatever[1])
        } else {
            splitArray.push(sortedArray[i])
        }
    }
    // for loop through sorted array calling split until they are all arrays of 1 length
    sortedArray = merge(sortedArray[0], sortedArray[1])
    while (array.length !== sortedArray.length) {

    }
    // merges split arrays back together in order
    return sortedArray;
}