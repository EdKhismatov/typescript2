function sorting(arr1: number[], arr2: number[]): number[] {
  let arr: number[] = [];
  let j = 0;
  let a = 0;
  const smallArray = arr1.length <= arr2.length ? arr1 : arr2;
  for (let i = 0; i < smallArray.length; i++) {
    if (arr1[a] >= arr2[j]) {
      arr.push(arr2[j]);
      j++;
    }
    if (arr1[a] <= arr2[j]) {
      arr.push(arr1[a]);
      a++;
    }
  }
  if (!arr1[a]) {
    arr = [...arr, ...arr2.slice(j)];
  }
  if (!arr2[j]) {
    arr = [...arr, ...arr1.slice(a)];
  }
  return arr;
}
// [1,1,2,2,3,4,5,12,15]
console.log(sorting([1, 5, 10, 11, 12], [1, 2, 3]));
