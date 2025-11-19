// type User<Name, Age> = {
//   name: Name;
//   age: Age;
//   balance: number;
// };
//
// type Alex = User<'Alex', 20>;
// type Bob = User<'Alexaz', 24>;

// function getValueFromObject<T extends object, R extends keyof T>(obj: T, key: R): T {
//   return obj[key];
// }
const alex = {
  id: 0,
  name: 'alex',
  age: 20,
  hasCar: true,
};
// console.log(getValueFromObject(alex, 'name'));

// function updateValue<T extends object, R extends Exclude<keyof T, 'id'>, S extends T[R], Def extends T[keyof T]>(
//   obj: T,
//   key: R,
//   value: S,
//   def: Def,
// ): R {
//   return obj[key] as R;
// }
//
// console.log(updateValue(alex, 'age', 20, 'asd'));

function customService<T extends string>(keys: T[]) {
  function save<U>(key: T, data: U) {
    // const transformed = transformDara(data)
    // service.save(key, JSON.stringify(transformed)
  }
  function getData(key: T) {
    // login...
    // return service.get(key)
  }
  return { save, getData };
}

const serviceUtils = customService(['iserId', 'videoId'] as const);
serviceUtils.save('iserId', {});
serviceUtils.getData('videoId');
