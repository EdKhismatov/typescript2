/* Создайте функцию generateRandomValue(min: number, max: number),
которая будет возвращать рандомное целое число в промежутке от min до max.
  Создайте функцию getOneRandomItem(items), которая принимает массив элементов,
  а возвращает рандомный элемент массива, используя функцию generateRandomValue().
  Не забудьте про дженерики! Возвращаемый элемент должен быть того же типа, что и элементы массива!
Создайте функцию getManyRandomItems(items, count), которая принимает на вход массив элементов и размер,
  и возвращает новый массив, который содержит count рандомных элементов из items, используя функцию getOneRandomItem(items).
  Не забудьте про дженерики!
Затем создайте вторую версию функции - getManyRandomItemsV2, который будет возвращать только уникальные значения без повторений!
Укажите подходящие типы для аргументов и возвращаемых значений!
 */

const generateRandomValue = (min: number = 0, max: number): number => {
  // / ... Случайное число от min до max
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getOneRandomItem<T>(items: T[]): T {
  // ... С помощью generateRandomValue достаётся случайный элемент из "items"
  return items[generateRandomValue(0, items.length - 1)];
}

function getManyRandomItems<K>(items: K[], count: number): K[] {
  // ... "count" раз вызывается функция "getOneRandomItem"
  const result: K[] = [];
  for (let i = 0; i < count; i++) {
    result.push(items[generateRandomValue(0, items.length - 1)]);
  }
  return result;
}

function getManyRandomItemsV2<K>(items: K[], count: number): K[] {
  // ... Должно вернуть значения
  const result: K[] = [];
  let number = 0;
  while (number <= count - 1) {
    const num = items[generateRandomValue(0, count - 1)];
    if (!result.includes(num)) {
      number++;
      result.push(num);
    }
  }
  return result;
}

const words = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'];
const [first, second] = getManyRandomItems(words, 2);
console.log(first.toUpperCase()); // first должен подсвечиваться типом string
console.log(second.toUpperCase()); // second должен подсвечиваться типом string

const numbers = [1, 2, 3, 4, 5, 6];
const [digit] = getManyRandomItems(numbers, 1);
console.log(digit * 100); // digit должен подсвечиваться типом number
//
const dataV2 = ['a', 'b', 'c', 'd', 'e'];
const uniqV2 = getManyRandomItemsV2(dataV2, 5);
console.log(uniqV2); // Здесь должны быть все элементы dataV2 в случайном порядке
console.log(dataV2.length === uniqV2.length); // Здесь должно быть true
