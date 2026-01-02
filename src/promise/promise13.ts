/*
Добавьте в функцию sleep рандомный шанс на ошибку.
Запараллельте сразу несколько снов, потренируйтесь с методом allSettled.
Но теперь не деструктурируйте массив сразу, а обходите его циклом и в
цикле выводите информацию об идентификаторе сна и его успешности. Примерно так:
*/
import { readFile } from 'node:fs/promises';

const sleep = async () => {
  const promises = await Promise.allSettled([
    readFile('./file1.txt', 'utf-8'),
    readFile('./file2.txt', 'utf-8'),
    readFile('./file3.txt', 'utf-8'),
  ]);
  for (let i = 0; i < promises.length; i++) {
    if (promises[i].status === 'fulfilled') {
      console.log(`Promises ${i + 1} Успех, Ответ: ${promises[i].value} ${i + 1}!`);
    } else {
      console.log(`Promises ${i + 1} Ошибка, Ответ: Непредвиденная ошибка ${i + 1}!`);
    }
  }
};

sleep();
