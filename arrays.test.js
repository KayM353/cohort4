import arrayFunctions from './arrays'

test('does it add to the array', () => {
    // expect(arrayFunctions.addArray()).toStrictEqual([undefined]);
    // expect(arrayFunctions.addArray(1)).toStrictEqual([1]);
    expect(arrayFunctions.addArray(3)).toStrictEqual([3]);
    expect(arrayFunctions.addArray([1,2],3)).toStrictEqual([1,2,3]);
    expect(arrayFunctions.addArray([45,67],89)).toStrictEqual([45,67,89]);
});

// test('does this add up the array', () => {
//     // expect(arrayFunctions.totalArray()).toStrictEqual();
//     expect(arrayFunctions.totalArray([10, 30])).toStrictEqual(40);
// });
test('does this add all the array elements', () => {
    expect(arrayFunctions.totalArray([1,2,3])).toStrictEqual(6);
    expect(arrayFunctions.totalArray([10, 30])).toStrictEqual(40);
});

test('does this clear the array', () => {
    expect(arrayFunctions.clearArray(1,2)).toStrictEqual([]);
    expect(arrayFunctions.clearArray([1,2,3],4)).toStrictEqual([]);
}); 