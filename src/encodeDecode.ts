export type User = Record<string, string>;

const user: User = {
  name: 'aaabcdeeeef',
  surname: 'hhfooodgeeeerg',
  faaang: 'ffaanngg',
  x: 'xxxxxxxxxxxxxxxxxxxx',
};

function encodeDecode(user: User): string {
  const codeFinish: User = {};
  let code = '';
  let count = 0;
  for (const key in user) {
    for (let i = 0; i < user[key].length; i++) {
      const userKey = user[key];
      if (userKey[i] !== userKey[i + 1]) {
        count++;
        code += userKey[i] + (count > 1 ? count : '');
        count = 0;
      } else {
        count++;
      }
    }
    codeFinish[key] = code;
    code = '';
    count = 0;
  }
  return JSON.stringify(codeFinish);
}

// --------- Проверка кодирования
const encoded: string = encodeDecode(user);
const expectedEncoded = '{"name":"a3bcde4f","surname":"h2fo3dge4rg","faaang":"f2a2n2g2","x":"x20"}';

console.log('Закодированная строка', encoded);
console.log('Кодирование:', encoded === expectedEncoded ? 'ВЕРНО' : 'ОШИБКА', '\n');

function decode(user: string) {
  const users = JSON.parse(user);
  const decodeFinish: User = {};
  let code = '';
  let letter = '';
  let count = '';
  for (const key in users) {
    for (let i = 0; i < users[key].length; i++) {
      const letters = users[key];
      if (!isNaN(letters[i]) && !isNaN(letters[i + 1])) {
        // если по индексу число и по след индексу число
        count += letters[i];
      } else if (!isNaN(letters[i]) && isNaN(letters[i + 1])) {
        // если число и строка
        count += letters[i];
        code += letter.repeat(Number(count));
        count = '';
        letter = '';
      } else if (isNaN(letters[i]) && isNaN(letters[i + 1])) {
        // если строка и строка
        code += letters[i];
        letter = '';
      } else {
        // просто строка с последующим числом
        letter += letters[i];
      }
    }
    decodeFinish[key] = code;
    code = '';
    letter = '';
    count = '';
  }
  return decodeFinish;
}

// // --------- Проверка декодирования
const decoded: object = decode(encoded);
console.log('Декодированный объект', decoded);
