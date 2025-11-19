function sorting(arr1: number[], arr2: number[]): number[] {
  let arr: number[] = [];
  let j = 0;
  let a = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[a] >= arr2[j]) {
      arr.push(arr2[j]);
      j++;
    }
    if (arr1[a] <= arr2[j]) {
      arr.push(arr1[a]);
      a++;
    }
    if (!arr1[a]) {
      arr = [...arr, ...arr2.slice(j)];
    }
    if (!arr1[j]) {
      arr = [...arr, ...arr1.slice(j)];
    }
  }
  return arr;
}
// [1,1,2,2,3,4,5,12,15]
console.log(sorting([1, 2, 3, 4, 5, 10, 11, 12], [1, 2, 5, 12, 15]));
