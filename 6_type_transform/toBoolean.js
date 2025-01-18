const stringNumber = '15';
console.log('stringNumber', stringNumber, typeof stringNumber);
const booleanTrue = Boolean(stringNumber);
console.log('booleanTrue', booleanTrue, typeof booleanTrue);
const emptyString = '';
console.log('emptyString', emptyString, typeof emptyString);
const booleanFalse =  Boolean(emptyString);
console.log('booleanFalse', booleanFalse, typeof booleanFalse);

console.log('undefined to boolean', Boolean(undefined));
console.log('null to boolean', Boolean(null));