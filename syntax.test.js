import functions from  './syntax'

test('Is the Input a Number', () => {
    expect(functions.isNum(1)).toBe(3);
    expect(functions.isNum("a")).toBe("a2");
});

test('Is the Input a String',() => {
    expect(functions.isString('a')).toBe("a time");
    expect(functions.isString(1)).toBe("1 time");
});

test('True or False', () => {
    expect(functions.isTrue(20)).toBe(true);
    expect(functions.isTrue(17)).toBe(false);
});

test('Update the Array', () => {
    expect(functions.updateArray(70)).toStrictEqual([70,70,70]);
});
// for an array, If it should pass with deep equality, replace "toBe" with "toStrictEqual"
// recieved side is the location being uodated, expected side is the full updated array

test('Update the Object', () => {
    expect(functions.updateObject('Shelby GT500 ')).toBe('Shelby GT500 ')
});

test('Is it Undefined', () => {
    expect(functions.isUndefined(undefined)).toBe(undefined)
});

test('is it Even', () => {
    expect(functions.isEven(4)).toBe(true);
    expect(functions.isEven(7)).toBe(false);
});

// FUNCTIONS
test('pete parameter', ()=> {
    expect(functions.isPar(Number)).toBe(Number);
    expect(functions.isPar(undefined)).toBe(undefined);
    expect(functions.isPar(String)).toBe(String);
});

// Arrays
test('Front of the line', () => {
    expect(functions.frontArray(1)).toStrictEqual([1,2,3,4,5]);
});

test('Back of the line', () => {
    expect(functions.backArray(5)).toStrictEqual([1,2,3,4,5]);
});

test('update that array', () => {
    expect(functions.updArr(2)).toStrictEqual(["Apple", "Mango", "Kiwi", "Pineapple"]);
});

test('thrown for a loop', () => {
    expect(functions.isLoop(0)).toBe(10);
});

test('flung in a loop', () => {
    expect(functions.inLoop({fname:"John ", lname:"Doe ", age:25})).toBe("John Doe 25");
    expect(functions.inLoop({fname:"Dick ", lname:"Head ", age:69})).toBe("Dick Head 69")
});


test('While you were looping', () =>{
    expect(functions.isWhile(3)).toStrictEqual(13);
});    

test('How do/while you do', () => {
    expect(functions.doWhile(3)).toStrictEqual(13);
});