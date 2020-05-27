function mergeSort(array) {
  let midPoint = array.length / 2;
  let leftHalf = array.slice(0, midPoint);
  let rightHalf = array.slice(midPoint + 1, array.length - 1);
  let temp = [];
  for (let i = 0; i <= array.length-1; i++) {
    if (array[i] > array[i + 1]) {
      temp[i] = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp[i];
    }
  }
  console.log("temp: " + temp);
  console.log("array: " + array);
}

let array = [5, 4, 3, 2, 1];
let rightHalf = array.length - 1;

console.log(mergeSort(array));

// console.log(array, 0, array.length-1);
