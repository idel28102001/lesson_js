// По умолчанию - undefined возвращает
const ourFunction1 = () => {
}
const result1 = ourFunction1();
console.log('ourFunction1 result', result1);

const ourFunction2 = () => {
  return undefined; // аналог
}
const result2 = ourFunction2();
console.log('ourFunction2 result', result2);

const ourFunction3 = () => {
  return 200;
}
const result3 = ourFunction3();
console.log('ourFunction3 result', result3);

const ourFunction4 = () => {
  return 'Value';
}
const result4 = ourFunction4();
console.log('ourFunction4 result', result4);