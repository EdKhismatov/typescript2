import * as fs from 'node:fs/promises';
/*
Создайте функцию readFile, она должна принимать на вход пять до файла,
читать этот файл с помощью функции readFile из модуля fs, и дополнительно, после прочтения файла,
функция должна приостанавливаться на рандомное количество миллисекунд от 1200 до 2500
Функция должна возвращать промис, который резолвится со строкой, прочитанной из файла.
Создайте рядом с вашим главным файлом ещё 3 текстовых файла, наполните их различным содержанием
и проверьте работоспособность вашей функции.
*/

const readFile = async (file: string) => {
  const time = 1200 + Math.round(Math.random() * 1300);
  const settings = { encoding: 'utf-8' } as const;
  const fileContent = await fs.readFile('./file1.txt', settings);
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fileContent);
    }, time);
  });
  return result;
};

console.log(readFile('file1.txt'));
