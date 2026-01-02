import { readFile } from 'node:fs/promises';

const main = async () => {
  const start = new Date().getTime();

  const file = await Promise.race([
    readFile('./file1.txt', 'utf8'),
    readFile('./file2.txt', 'utf8'),
    readFile('./file3.txt', 'utf8'),
  ]);

  console.log(file);

  const end = new Date().getTime();

  console.log('\nВесь процесс чтения и вывода занял ms:', end - start);
};

main();
