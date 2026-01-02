/* Как в примере с файлами, где каждый ответ явно содержит имя файла, для которого было запрошено чтение.
Добавьте явный строковый и числовой идентификатор, который принимает функция sleep, и теперь она возвращает ответ вида
[*идентификатор*] Я поспал!
*/
import fs from 'node:fs/promises';

const readFile = async (file: string, sec: number) => {
  const fileContent = await fs.readFile(file, 'utf-8');
  setTimeout(() => {
    console.log(`${file}, ${fileContent}`);
  }, sec * 1000);
};

console.log(readFile('file2.txt', 1));
