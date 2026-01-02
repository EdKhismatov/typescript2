import { readFile } from 'node:fs/promises';

setInterval(() => {
  console.log('Время:', new Date().toISOString()); // Сюда точку остановки!
}, 100);

const main = async () => {
  const start = new Date().getTime(); // Сюда точку остановки!

  const [file1, file2, file3] = await Promise.all([
    readFile('./file1.txt', 'utf8'),
    readFile('./file2.txt', 'utf8'),
    readFile('./file3.txt', 'utf8'),
  ]);

  console.log(file1);
  console.log(file2);
  console.log(file3);

  const end = new Date().getTime();

  console.log('\nВесь процесс чтения и вывода занял ms:', end - start);
};

main();
