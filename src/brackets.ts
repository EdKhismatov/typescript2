/*
Напишите функцию, которая принимает на вход строку, состоящую из открывающихся и закрывающихся скобок,
и возвращает true или false - правильный ли порядок открытия и закрытия скобок.
Правильным порядком считается ситуация, когда скобки закрываются в таком же порядке, в котором и открывались.
Подсказка: Это идеальная ситуация, чтобы применить структуру данных Стек (Stack), она сделает за вас 80% задачи.
 */

// function check(str: string) {
//   const arr: string[] = [];
//   for (const arrElement of str) {
//     if (arrElement === '(' || arrElement === '{' || arrElement === '[') {
//       arr.push(arrElement);
//     }
//     if (arrElement === ')') {
//       if (arr.includes('(')) {
//         const index = arr.indexOf('(');
//         arr.splice(index, 1);
//       } else {
//         arr.push(arrElement);
//       }
//     }
//     if (arrElement === '}') {
//       if (arr.includes('{')) {
//         const index = arr.indexOf('{');
//         arr.splice(index, 1);
//       } else {
//         arr.push(arrElement);
//       }
//     }
//     if (arrElement === ']') {
//       if (arr.includes('[')) {
//         const index = arr.indexOf('[');
//         arr.splice(index, 1);
//       } else {
//         arr.push(arrElement);
//       }
//     }
//   }
//   return arr.length === 0;
// }

// Вторая версия
function check(str: string) {
  const arr: string[] = [];
  const obj: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (const arrElement of str) {
    if (arrElement === '(' || arrElement === '{' || arrElement === '[') {
      arr.push(arrElement);
    }
    if (Object.keys(obj).includes(arrElement)) {
      if (arr.includes(obj[arrElement])) {
        const index = arr.indexOf(obj[arrElement]);
        arr.splice(index, 1);
      } else {
        arr.push(arrElement);
      }
    }
  }
  return arr.length === 0;
}

console.log(check('()')); // true
console.log(check('({})')); // true
console.log(check('({[({()})]})')); // true
console.log(check('(){}([])[[[]]]{}()')); // true
//
console.log(check('(({})')); // false/
console.log(check('({}))')); // false
console.log(check('([})')); // false
console.log(check(')(')); // false
console.log(check(')(}][{')); // false
