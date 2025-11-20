import { faker } from '@faker-js/faker';
/*
Написать 2 функции:
1. Для сокращения ссылки
2. Для получения полной ссылки по короткой
Для хранения данных между вызовами функций используйте просто массив в переменной.
Для самого "сокращения" вы просто генерируйте рандомную короткую строку.
Опишите все типы TypeScript.
Дополнительные требования:
1. Решите проблему коллизий, когда для разных длинных ссылок генерируется одинаковая короткая
2. Считайте количество просмотров ссылки.
  Под "просмотром" понимает расшифровка короткой ссылки.
  Напр если ссылку "site.com/abc" расшифровали 3 раза, то у неё 3 прсмотра
3. Напишите функцию getTopByViews(count), которая возвращает count ссылок по убыванию просмотров
(например топ 3 или топ 5, или сколько попросят в count)
 */

type UserRecord = Record<string, { email: string; count: number }>;
const data: UserRecord = {};
let size = 1;

const creatShots = (email: string): UserRecord => {
  let id: string = faker.string.nanoid(size);
  // const email: string = faker.internet.email();
  let counter = 0;
  while (id in data) {
    id = faker.string.nanoid(size);
    counter++;
  }
  if (counter > 3) {
    size++;
    console.log(`Понадобилось ${counter} повторных попыток, новый раз размер ${size}`);
  }
  data[id] = { email, count: 0 };
  return data;
};

// for (let i = 0; i < 1_000_000; i++) {
//   creatShots('Jacky92@gmail.com');
// }

// создаем короткие ссылки
creatShots('Reuben51@hotmail.com');
creatShots('Jacky92@gmail.com');
creatShots('Marty_Hagenes-Swift@hotmail.com');
creatShots('Raleigh_Torp@yahoo.com');
creatShots('Cathryn.Wiegand@gmail.com');
creatShots('Ericka_Ondricka54@hotmail.com');
creatShots('Colin.Hagenes@gmail.com');
creatShots('Libby_Zboncak@gmail.com');
creatShots('Dejon.Deckow58@yahoo.com');
creatShots('Reed.Reichel1@gmail.com');
creatShots('Orion_OReilly@gmail.com');

// console.log(data);
// Короткая ссылка
function createShortLink(cipher: string) {
  for (const key in data) {
    if (data[key].email === cipher) {
      return `Короткая ссылка сайта ${cipher}: ${key}`;
    }
  }
  return 'Короткая ссылка не найдена';
}
// по короткой ссылке узнаем сайт
function shortLink(link: string | number) {
  // for (const key in data) {
  //   if (key === link) {
  //     return `Расшифровка короткой ссылки ${link} : ${data[key].email}`;
  //   }
  // }
  // return 'По короткой ссылке сайт не найден';
  if (link in data) {
    data[link].count++;
    return `Расшифровка короткой ссылки '${link}' : ${data[link].email}`;
  }
  return 'По короткой ссылке сайт не найден';
}

console.log(createShortLink('Raleigh_Torp@yahoo.com'));

// Просмотры
console.log(shortLink('1'));
console.log(shortLink('1'));
console.log(shortLink('1'));
console.log(shortLink('1'));
console.log(shortLink('1'));
console.log(shortLink('1'));

function getTopByViews(count: number) {
  return Object.values(data)
    .sort((a, b) => b.count - a.count)
    .slice(0, count);
}

console.log(getTopByViews(3));
