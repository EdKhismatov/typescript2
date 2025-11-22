function substrings(text: string, symbols: string) {
  if (symbols.length === 0) {
    return false;
  }
  const str = text.split('');
  let stack = symbols.split('');
  for (let i = 0; i < str.length; i++) {
    if (stack.includes(str[i])) {
      const index = stack.indexOf(str[i]);
      stack.splice(index, 1);
    } else {
      stack = [...symbols];
    }
    if (stack.length === 0) {
      return true;
    }
  }
  return false;
}

console.log(substrings('example', 'pml')); // true, ищем 'pml' и находим 'mpl'
console.log(substrings('server', 'revers')); // true, ищем 'revers' и находим 'server'
console.log(substrings('automati', 'amtto')); // true, ищем 'amtto' и находим 'tomat'

console.log(substrings('hello', 'he')); // true
console.log(substrings('hello', 'lo')); // true а выходит false
// console.log(substrings('hello', 'ell')); // true
// console.log(substrings('hello', '')); // false
// console.log(substrings('hello', 'world')); // false
//
// console.log(substrings('banana', 'na')); // true
// console.log(substrings('banana', 'nan')); // true а выходит false
// console.log(substrings('abcdabcd', 'acb')); // true
