/* Напишите асинхронную функцию, которая будем останавливать выполнение вашего кода на 3 секунды.
 Используйте setTimeout, обёрнутый в Promise.
*/

export const sleep = async () => {
  const start = new Date().getTime();
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Приветик');
    }, 3000);
  });
  const end = new Date().getTime();
  console.log(result, '\nВесь процесс чтения и вывода занял ms:', end - start);
};

sleep();
