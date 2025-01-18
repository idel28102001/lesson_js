const ourArray = ['Ivan', 'Idel','Irina','Don'];
console.log('ourArray =', ourArray);
//Строка тоже имеет свойство length - длину
function isLessOrEqualThan4_1(value) {
  return value.length <=4;
}

// Способ с циклом
const newArray1 = [];
for (const value of ourArray) {
  const isRight = isLessOrEqualThan4_1(value);
  console.log(value,'value is less or equal than 4 =', isRight);
  if (isRight) {
      newArray1.push(value);
  }
}
console.log('newArray1 =',newArray1);

//Способ 
function isLessOrEqualThan4_2(value) {
  return value.length <=4;
}
const newArray2 = ourArray.filter(isLessOrEqualThan4_2);
console.log('newArray2 =',newArray2);

function isLessOrEqualThan4_3(value) {
  return value.length <=4;
}
const newArray3 = ourArray.filter(value=>{
  return isLessOrEqualThan4_3(value);
});
console.log('newArray3 =',newArray3);

const newArray4 = ourArray.filter(value=>{
 return value.length <=4;
});
console.log('newArray4 =',newArray4);