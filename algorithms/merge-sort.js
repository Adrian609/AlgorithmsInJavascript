function mergeSort(arr) {
  let lHalf = arr.slice(0, arr.length / 2);
  let rHalf = arr.slice(arr.length / 2, arr.length);
  sort(lHalf);
  sort(rHalf);
  arr = merge(lHalf, rHalf);
  return arr;
}

function sort(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function merge(lHalf, rHalf) {
  let mergedArray = [...lHalf, ...rHalf];
  sort(mergedArray);

  return mergedArray;
}

let array = [5, 4, 3, 2, 1, 0];

console.log(mergeSort(array));
