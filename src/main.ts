// const fun = (arr1: number[], arr2: number[]) => {
//   const result = [];
//   for (const resultElement of arr1) {
//     if (arr2.includes(resultElement)) {
//       result.push(resultElement);
//     }
//   }
//   return result;
// };
//
// console.log(fun([1, 2, 5], [5, 3, 6, 2]));
//
// const size = 100000;
//
// // от 1 до 100.001
// const array = Array.from({ length: size }, (_, index) => index + 2);
//
// // от 100.000 до 200.001
// const array2 = Array.from({ length: size }, (_, index) => index + size);
//
// console.log('Начало V1');
// const start = new Date().getTime();
// console.log(fun(array, array2));
// console.log(`Конец V1. Ушло ${new Date().getTime() - start} ms\n\n\n`);
