import { readFile } from 'node:fs/promises';

const main = async () => {
  const start = new Date().getTime();

  const file1 = await readFile('./file1.txt', 'utf8');
  const file2 = await readFile('./file2.txt', 'utf8');
  const file3 = await readFile('./file3.txt', 'utf8');

  console.log(file1);
  console.log(file2);
  console.log(file3);

  const end = new Date().getTime();

  console.log('\nВесь процесс чтения и вывода занял ms:', end - start);
};

main();
