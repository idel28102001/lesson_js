const literalObject = { '0': 99, '123': 123, newValue: '343' };
console.log('literalObject', literalObject, typeof literalObject);

delete literalObject['123']
delete literalObject.newValue;
console.log('literalObject', literalObject, typeof literalObject);