function bubbleSort(array){
    var newArray = array;

    for(var i = newArray.length-1 ; i > 0 ; i--){

        for(var j = 0 ; j < i ; j++){

            newArray = swap(newArray, j);
        }
    }

    return newArray;
}

function swap(array, index){
    var newArray = array;

    if(newArray[index] > newArray[index+1]){
        var bigger = newArray[index];
        newArray[index] = newArray[index+1];
        newArray[index+1] = bigger;
    }
    return newArray;
}