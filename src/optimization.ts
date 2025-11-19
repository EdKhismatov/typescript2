import { faker } from '@faker-js/faker';

const url = 'http://backend-mentor.tech/very-long-path';
const data: Record<string, string> = {};
let size = 1;

const creatShots = (usr: string): string => {
  let id: string = faker.string.nanoid(size);
  let counter = 0;
  while (id in data) {
    id = faker.string.nanoid(size);
    counter++;
  }
  if (counter > 3) {
    size++;
    console.log(`Понадобилось ${counter} повторных попыток, новый раз размер ${size}`);
  }
  data[id] = id;
  return id;
};

for (let i = 0; i < 1_000_000; i++) {
  creatShots(url);
}
const s = creatShots(url);
console.log(s);
// для 10_000_000 я так и не дождался
