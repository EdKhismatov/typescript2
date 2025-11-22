type Figures = {
  name: string;
  type: string;
  color: string;
  border: string | null;
  size: string;
};

type Difference = {
  name: string;
  count: number;
};
type Difference2 = Record<string, Difference>;

export const first: Figures = {
  name: 'Фигура №1',
  type: 'square',
  color: 'red',
  border: 'black',
  size: 'large',
};

const second: Figures = {
  name: 'Фигура №2',
  type: 'square',
  color: 'red',
  border: null,
  size: 'large',
};

const third: Figures = {
  name: 'Фигура №3',
  type: 'circle',
  color: 'red',
  border: 'black',
  size: 'large',
};

const fourth: Figures = {
  name: 'Фигура №4',
  type: 'square',
  color: 'green',
  border: 'black',
  size: 'large',
};

const fifth: Figures = {
  name: 'Фигура №5',
  type: 'square',
  color: 'red',
  border: 'black',
  size: 'small',
};

const figures: Figures[] = [first, second, third, fourth, fifth];

function differenceFigure(figures: Figures[], difference: keyof Figures) {
  const obj: Difference2 = {};
  for (const key of figures) {
    const keys: string | null = key[difference];
    if (keys !== null) {
      if (!obj[keys]) {
        obj[keys] = { name: key.name, count: 0 };
      } else if (obj[keys]) {
        obj[keys].count += 1;
      }
    } else {
      obj['null'] = { name: key.name, count: 0 };
    }
  }
  const result = Object.values(obj).filter((el) => el.count === 0);
  return `Для ключа ${difference} отличающаяся фигура - ${result[0].name}`;
}

const type = 'size';

console.log(differenceFigure(figures, type));
