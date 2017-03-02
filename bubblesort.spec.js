describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array in ascending order', function(){
     function arraysAreEqual(arr1, arr2){
        for(var i = 0 ; i < arr1.length ; i++){
            if(arr1[i] !== arr2[i]) return false
        }
        return true;
     }

     var expectedOutput = [1,2,3,4];
     var actualOutput = bubbleSort([4,2,3,1]);
     // var arr3 = bubbleSort([1,2,5,4]);

     expect(arraysAreEqual(expectedOutput, actualOutput)).toEqual(true);
  });

  it('calls swap ___ number of times', function(){

    var obj = {
        bubble: bubbleSort,
        swap: swap
    };

    // spyOn(obj, 'bubble').and.callThrough();
    spyOn(obj, 'swap').and.callThrough();
    obj.bubble([4,2,3,1]);
    expect(obj.swap).toHaveBeenCalled();


  });

});


describe('Swap', function(){

     it('returns an array', function(){
       var output = swap([1,2], 0);
       expect(Array.isArray(output)).toEqual(true);
     });

     it('the outputted array is sorted at given index', function(){
        var testArr = [5,3,4,2,1];
        var output1 = swap(testArr, 3);
        var output2 = swap(testArr, 1);

        expect(output1[4]).toEqual(2);
        expect(output2[1]).toEqual(3);
     });
});