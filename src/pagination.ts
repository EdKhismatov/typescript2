// Создайте дженерик-тип Paginated<T>, чтобы код ниже заработал

type Person = {
  name: string;
};
type WithId = {
  id: number;
};

type Combined<T, U> = T & U;
type PersonWithAddress = Combined<Person, WithId>;

type Paginated<T extends Person> = {
  total: number;
  limit: number;
  offset: number;
  items: T[];
};

const responseOfPersons: Paginated<Person> = {
  total: 10,
  limit: 5,
  offset: 0,
  items: [{ name: 'P1' }],
};

const responseOfSomething: Paginated<Person> = {
  total: 10,
  limit: 5,
  offset: 0,
  items: [],
};

const p: PersonWithAddress = {
  id: 1,
  name: 'name',
};
