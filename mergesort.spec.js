describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    var testArray = [6,5,4,3,2,1];
    var testArrayOdd = [7,6,5,4,3,2,1];
    expect(split(testArray).length).toEqual(2);
    expect(split(testArray)[0][0]).toEqual(6);
    expect(split(testArray)[1][0]).toEqual(3); 
    expect(split(testArray)[0].length).toEqual(3);
    expect(split(testArrayOdd)[0].length).toEqual(4);
  });
});

describe('Merge Array function', function() {
    it('is able to merge two arrays', function() {
        expect(merge([1,2,3], [4,5,6]).length).toEqual(6);
    })
})