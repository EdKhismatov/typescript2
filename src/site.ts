// createShort(link) => Получает на вход длинную ссылку, а отдаёт короткую. Сохраняет инфу в бд
// getFull(shortLink) => Получает на вход короткую, а отдаёт длинную. Читает инфу из бд
// Для хранения данных использовать массив (будет эмулировать реальную баз данных)
// Для создания короткой ссылки использовать faker.string.nanoid
// Для каждой сокращенной ссылки нужно собирать кол-во просмотров (сколько раз был вызван getFull для неё)
import { faker } from '@faker-js/faker';
// Пример использования:
const url = 'http://backend-mentor.tech/very-long-path';

const data: Site[] = [];

type Site = Record<string, number | string>;
const createShort = (url: string): string => {
  const id = faker.string.nanoid(6);
  data.push({ [id]: url, count: 0 });
  return id;
};

const s = createShort(url); // К примеру site.com/jkchkjahsj
console.log(s);

// const f = getFull(s); // http://backend-mentor.tech/very-long-path
