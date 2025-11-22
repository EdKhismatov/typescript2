// Узнаем какой зал нам нужен и создаем необходимый зал
function hallSelection(numberOfVisitors: number) {
  const hall: string[][] = [];
  for (let i = 0; i <= numberOfVisitors; i++) {
    if (i * i >= numberOfVisitors) {
      for (let j = 0; j < i; j++) {
        hall.push('-'.repeat(i).split(''));
      }
      return hall;
    }
  }
  return hall;
}

// console.log(hallSelection(2));

// Садим на рандомные места
function seatVisitors(users: string[]) {
  if (users.length === 1) {
    return [users];
  }
  const holl: string[][] = hallSelection(users.length);
  let countUser = users.length;
  let visitor = 0;
  while (countUser !== 0) {
    const row = Math.floor(Math.random() * holl.length);
    const place = Math.floor(Math.random() * holl[0].length);
    if (holl[row][place] === '-') {
      holl[row].splice(place, 1, users[visitor]);
      countUser--;
      visitor++;
    }
  }
  return holl;
}
const person = ['Саша', 'Максим', 'Алексей', 'Валентин', 'Алексей', 'Валентин'];
console.log(seatVisitors(person));
