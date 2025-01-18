const literalObject = {};
console.log('literalObject', literalObject, typeof literalObject);

literalObject['123'] = 123;
literalObject.newValue = '343';
console.log('literalObject', literalObject, typeof literalObject);