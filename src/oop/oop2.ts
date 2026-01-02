/*
1. Исправьте вывод программы.

Ожидаемый вывод:
Массив: X-0,X-1,X-2,X-3,X-4,X-5,X-6,X-7,X-8,X-9
Массив: X-9,X-8,X-7,X-6,X-5,X-4,X-3,X-2,X-1,X-0

Текущий вывод:
Массив: X-0,X-1,X-2,X-3,X-4,X-5,X-6,X-7,X-8,X-9
Массив: undefined

2. Добавьте новую операцию, которая бы возвращала новый массив, состоящий только из последних 5 элементов полученного массива.
Например, если на вход пришло [1, 2, 3, 4, 5, 6, 7], то на выход должно вернуться [3, 4, 5, 6, 7]

Передайте ранее полученный ревёрснутый массив в Вашу новую операцию.
Выведите полученный массив с помощью операции logArray.
Итоговый вывод программы вместе с первым пунктом должен быть такой:
Массив: X-0,X-1,X-2,X-3,X-4,X-5,X-6,X-7,X-8,X-9
Массив: X-9,X-8,X-7,X-6,X-5,X-4,X-3,X-2,X-1,X-0
Массив: X-4,X-3,X-2,X-1,X-0
 */

enum ExecutorOperations {
  fillArrayWithElements = 'fillArrayWithElements',
  logArray = 'logArray',
  reverseArray = 'reverseArray',
  arrayFiveResult = 'arrayFiveResult',
}

class Executor {
  public execute(command: ExecutorOperations, arg: any) {
    return this[command](arg);
  }

  private fillArrayWithElements<T>(element: T): string[] {
    return new Array(10).fill(element).map((el, i) => `${el}-${i}`);
  }

  private logArray<T>(array: T[]): void {
    console.log(`Массив: ${array}`);
  }

  private reverseArray<T>(array: T[]) {
    return Array.from(array).reverse();
  }

  private arrayFiveResult<T>(array: T[]) {
    return Array.from(array).slice(5).reverse();
  }
}

const executor = new Executor();

const array = executor.execute(ExecutorOperations.fillArrayWithElements, 'X');

executor.execute(ExecutorOperations.logArray, array);

const reversedArray = executor.execute(ExecutorOperations.reverseArray, array);

executor.execute(ExecutorOperations.logArray, reversedArray);

const fiveResults = executor.execute(ExecutorOperations.arrayFiveResult, array);

executor.execute(ExecutorOperations.logArray, fiveResults);
