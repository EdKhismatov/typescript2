class Animal {
  public type: string = 'animal';
}

export class Cat extends Animal {
  constructor() {
    super();
  }
  sayMeow() {
    return 'meow';
  }
}

export class Dog extends Animal {
  sayWoof() {
    return 'woof';
  }
}

const cat = new Cat();
const dog = new Dog();

console.log(cat.type);
console.log(cat.sayMeow());

console.log(dog.type);
console.log(dog.sayWoof());

/*
Текущий вывод:
undefined
meow
undefined
undefined
woof
undefined
 */

/*
Ожидаемый вывод:
animal
meow
animal
woof
 */
