import { faker } from '@faker-js/faker';
// Для конвертации JavaScript объекта в его строковый вид и обратно используются 2 функции:
//
//   JSON.stringify() - принимает на вход объект, возвращает его в виде строки, например JSON.stringify({ a: 10, b: 'abc' })
//   вернет строку "{"a":10,"b":"abc"}"
// JSON.parse() - принимает на вход строку, парсит и возвращает объект, например JSON.parse("{"a":10,"b":"abc"}") вернет объект
// { a: 10, b: 'abc' }
// К сожалению, JSON.parse не имеет дженерика, и любой ответ возвращает типа any, создайте функцию-обёртку parse, которая будет
// под-капотом делать JSON.parse, и типизировать ответ
//
// Данные для тестов нужно генерировать с помощью @faker-js/faker.

type User = {
  id: string;
  name: string;
};

const user: User = {
  id: faker.string.nanoid(6),
  name: faker.person.firstName(),
};

const userString = JSON.stringify(user);

// WebStorm должен подсвечивать тип User для этой переменной
function parse<T extends string>(userString: T): User {
  return JSON.parse(userString);
}
const parsedUser = parse(userString);
console.log(parsedUser);
console.log(parsedUser.name); // example
// console.log(parsedUser.abc); // Здесь должна гореть ошибка "TS2339: Property abc does not exist on type User"
