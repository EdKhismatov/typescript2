/* Сделайте, чтобы функция принимала на вход то количество секунд, которые она должна поспать.
То есть теперь не жёстко 3 секунды, а можно задать сколько нужно спать.
*/
export const sleep = async (sec) => {
  const start = new Date().getTime();
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Приветик');
    }, sec * 1000);
  });
  const end = new Date().getTime();
  console.log(result, '\nВесь процесс чтения и вывода занял ms:', end - start);
};

sleep(1);
