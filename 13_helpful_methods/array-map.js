const ourArray = ['Ivan', 'Idel','Irina','Don'];
console.log('ourArray =', ourArray);

function modifyValue1(value) {
  return value+' is my firstname';
}

// Способ с циклом
const newArray1 = [];
for (const value of ourArray) {
  const newValue = modifyValue1(value);
  console.log('newValue =', newValue);
  newArray1.push(newValue);
}
console.log('newArray1 =',newArray1);

//Способ 
function modifyValue2(value) {
  return value+' is my firstname';
}
const newArray2 = ourArray.map(modifyValue2);
console.log('newArray2 =',newArray2);

function modifyValue3(value) {
  return value+' is my firstname';
}
const newArray3 = ourArray.map(value=>{
  return modifyValue3(value);
});
console.log('newArray3 =',newArray3);

const newArray4 = ourArray.map(value=>{
  return value+' is my firstname';
});
console.log('newArray4 =',newArray4);