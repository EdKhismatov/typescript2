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

/*
Напишите 2 функции для нахождения TLD (Top Level Domain) для переданной в функцию ссылки. Решение должно содержать минимум 2 различные реализации.

НЕТ! Напишите 1 функцию для извлечения TLD. Вторую не нужно!

site.com => com
my.domain.ru => ru
https://sub-domain.shop.lite => lite
https://news.ru/path-to-page?query=true => ru
*/

// const extractionDomen = (urlString: string) => {
//   const url = new URL(urlString);
//   const hostMain = url.hostname.split('.');
//   return hostMain.length > 1 ? hostMain[hostMain.length - 1] : hostMain[0];
// };
//
// // Здесь TLD - ru
// const sampleUri1 = 'https://username:password@www.example.ru:888/path.to/something?a=b&c=d.e.f.g';
// console.log(extractionDomen(sampleUri1));
//
// // Здесь TLD - com
// const sampleUri2 = 'https://www.example.com/path.to/something?a=b&c=d.e.f.g';
// console.log(extractionDomen(sampleUri2));
//
// // Здесь TLD - localhost
// const sampleUri3 = 'https://localhost/path.to/something?a=b&c=d.e.f.g';
// console.log(extractionDomen(sampleUri3));
