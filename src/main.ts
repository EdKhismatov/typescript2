const fun = (arr1: number[], arr2: number[]) => {
  const arrNumber: Record<string, number> = {};
  for (const number of arr1) {
    arrNumber[number] = 1;
  }
  for (const number of arr2) {
    arrNumber[number] = (arrNumber[number] || 0) + 1;
  }
  const result: number[] = [];
  for (const resultKey in arrNumber) {
    if (arrNumber[resultKey] === 2) {
      result.push(arrNumber[resultKey]);
    }
  }
  return result;
};

console.log(fun([1, 2, 5], [5, 3, 6, 2]));

const size = 100000;

// от 1 до 100.001
const array = Array.from({ length: size }, (_, index) => index + 2);

// от 100.000 до 200.001
const array2 = Array.from({ length: size }, (_, index) => index + size);

console.log('Начало V1');
const start = new Date().getTime();
console.log(fun(array, array2));
console.log(`Конец V1. Ушло ${new Date().getTime() - start} ms\n\n\n`);
