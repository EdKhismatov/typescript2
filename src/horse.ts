const size = 8; // Размер доски
// Конь на позиции h1 может пойти на: g3, f2
// Конь на позиции c2 может пойти на: e1, e3, d4, b4, a3, a1
// Конь на позиции e5 может пойти на: d3, f3, g4, g6, f7, d7, c6, c4
const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; // Буквенные подписи к доске

const chessboard: string[][] = [
  // a  b   c   d   e   f   g   h
  ['', '', '', '', '', '', '', 'x'], // 1
  ['', '', '', '', '', '', '', ''], // 2
  ['', '', '', '', '', '', '', ''], // 3
  ['', '', '', '', '', '', '', ''], // 4
  ['', '', '', '', '', '', '', ''], // 5
  ['', '', '', '', '', '', '', ''], // 6
  ['', '', '', '', '', '', '', ''], // 7
  ['', '', '', '', '', '', '', ''], // 8
];
function moves(chessboard: string[][]) {
  const result: string[] = [];
  let position = '';
  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard[i].length; j++) {
      if (chessboard[i][j] === 'x') {
        position = letters[j] + (i + 1);
        // вверх на 1 и влево 2
        if (chessboard[i - 1]?.[j - 2] === '') {
          result.push(letters[j - 2] + i);
        }
        // 1. вверх на 2 влево на 1
        if (chessboard[i - 2]?.[j - 1] === '') {
          result.push(letters[j - 1] + (i - 1));
        }
        // 2. вверх на 2 враво на 1
        if (chessboard[i - 2]?.[j + 1] === '') {
          result.push(letters[j + 1] + (i - 1));
        }
        // 3. вверх на 1 враво на 2
        if (chessboard[i - 1]?.[j + 2] === '') {
          result.push(letters[j + 2] + i);
        }
        // 4. вниз на 1 враво на 2
        if (chessboard[i + 1]?.[j + 2] === '') {
          result.push(letters[j + 2] + (i + 2));
        }
        // 5. вниз на 2 враво на 1
        if (chessboard[i + 2]?.[j + 1] === '') {
          result.push(letters[j + 1] + (i + 3));
        }
        // 6. вниз на 2 влево на 1
        if (chessboard[i + 2]?.[j - 1] === '') {
          result.push(letters[j - 1] + (i + 3));
        }
        // 7. вниз на 2 влево на 1
        if (chessboard[i + 1]?.[j - 2] === '') {
          result.push(letters[j - 2] + (i + 2));
        }
      }
    }
  }
  return `Конь на позиции ${position} может пойти на: ${result.join(', ')}`;
}

console.log(moves(chessboard));
