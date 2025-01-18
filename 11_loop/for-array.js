const ourArray = ['Idel','Ivan', 'Nastya', 'Irina'];
for (let idx = 0; idx<ourArray.length; idx++) {
  const value = ourArray[idx];
  console.log(value,idx);
}
console.log('-----------');

for (const idx in ourArray) {
    const value = ourArray[idx];
  console.log(value,idx);
}
console.log('-----------');

for (const value of ourArray) {
  console.log(value);
}