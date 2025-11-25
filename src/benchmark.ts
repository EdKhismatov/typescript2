// @ts-ignore
import Benchmark from 'benchmark';

const suite = new Benchmark.Suite();

// Линейный поиск
function linearSearch(arr: number[], target: number) {
  for (let i = 0; i < 1_000_000; i++) {
    if (target === i) {
      return i; // Возвращаем индекс найденного элемента
    }
  }
  return -1; // Возвращаем -1, если элемент не найден
}
const numbers = [5, 8, 2, 10, 3];

// создадим массив на 1_000_000 для бинарного поиска
function million(): number[] {
  const arr = [];
  for (let i = 0; i < 1_000_000; i++) {
    arr.push(i);
  }
  return arr;
}

// Бинарвый поиск
const binarySearch = (arr: number[], item: number) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // Находим средний индекс. Используем Math.floor для целого числа.
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];
    // Если элемент найден в середине, возвращаем его индекс.
    if (guess === item) {
      return mid;
    }
    // Если искомый элемент больше среднего, сужаем диапазон поиска до правой половины.
    if (guess < item) {
      left = mid + 1;
    }
    // Если искомый элемент меньше среднего, сужаем диапазон поиска до левой половины.
    else {
      right = mid - 1;
    }
  }
  // Если элемент не найден после завершения цикла, возвращаем -1.
  return -1;
};
const sortedArray = million();

// add tests
suite
  .add('Linear search', function () {
    linearSearch(numbers, 600_000);
  })

  .add('Binary search', function () {
    binarySearch(sortedArray, 600_000);
  })
  // add listeners
  .on('cycle', function (event: any) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    // @ts-ignore
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });

/*
Тест первый значение в цикле 1_000, будем искать цифру 500
Linear search x 2,774,737 ops/sec ±3.78% (88 runs sampled)
Binary search x 13,491,762 ops/sec ±0.68% (90 runs sampled)
Fastest is Binary search
При таких входных данных производительность бинарного поиска 13,5млн операций при погрешности 0,68%
У линейного поиска 2,7мл операций при погрешности 3,78%
 */

/*
Тест первый значение в цикле 100_000, будем искать цифру 60_000
Linear search x 17,061 ops/sec ±6.26% (85 runs sampled)
Binary search x 6,965,420 ops/sec ±0.48% (91 runs sampled)
Fastest is Binary search
При таких входных данных производительность бинарного поиска 6,9млн операций при погрешности 0,48%
У линейного поиска 17тыс операций при погрешности 6,26%
*/

/*
Тест первый значение в цикле 1_000_000, будем искать цифру 600_000
Linear search x 1,729 ops/sec ±6.44% (88 runs sampled)
Binary search x 6,576,001 ops/sec ±0.52% (93 runs sampled)
Fastest is Binary search
При таких входных данных производительность бинарного поиска 6,5млн операций при погрешности 0,52%
У линейного поиска 1.7тыс операций при погрешности 6,44%
*/

/* Вывод: Бинарный поиск лучше, с увеличением входных данных производительность
падает незначительно, по сравнению с линейным поиском
 */
