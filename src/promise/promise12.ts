/*
Запараллельте сразу несколько снов, потренируйтесь с методами all, allSettled, race.
Для метода all попробуйте вывести результаты, не используя деструктуризацию.
Обходите циклом массив промисов и выводите результат.
*/
import { readFile } from 'node:fs/promises';

const bootstrap = async () => {
  const settings = { encoding: 'utf-8' } as const;

  const promises = await Promise.all([
    readFile('./file1.txt', settings),
    readFile('./file2.txt', settings),
    readFile('./file3.txt', settings),
  ]);

  for (const pr of promises) {
    console.log(`${pr}\n`);
  }
};

bootstrap();

const sleep = async () => {
  const settings = { encoding: 'utf-8' } as const;

  const promises = await Promise.race([
    readFile('./file1.txt', settings),
    readFile('./file2.txt', settings),
    readFile('./file3.txt', settings),
  ]);

  console.log('уснул первый:', promises);
};

sleep();

const sleeps = async () => {
  const settings = { encoding: 'utf-8' } as const;

  const promises = await Promise.allSettled([
    readFile('./file1.txt', settings),
    readFile('./file2.txt', settings),
    readFile('./file3.txt', settings),
  ]);

  console.log(promises);
};

sleeps();
