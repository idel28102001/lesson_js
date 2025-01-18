//Array.length - выдаёт длину массива - в данном случае 4
const ourArray = ['Idel','Ivan', 'Nastya', 'Irina'];
let idx = 0;
while (idx < ourArray.length) {
  const value = ourArray[idx];
  console.log(value,idx);
  idx++;
}