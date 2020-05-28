function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left, comparator),
    mergeSort(right, comparator),
    comparator
  );
}

function merge(left, right, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }
  const resultArr = [];
  let leftCount = 0;
  let rightCount = 0;

  while (leftCount < left.length && rightCount < right.length) {
    if (comparator(left[leftCount], right[rightCount]) < 0) {
      resultArr.push(left[leftCount]);
      leftCount++;
    } else {
      resultArr.push(right[rightCount]);
      rightCount++;
    }
  }

  while (leftCount < left.length) {
    resultArr.push(left[leftCount]);
    leftCount++;
  }

  while (rightCount < right.length) {
    resultArr.push(right[rightCount]);
    rightCount++;
  }

  return resultArr;
}

let array = [5, 4, 3, 2, 1, 0];
let rightHalf = array.length - 1;

console.log(mergeSort(array));

// console.log("array: " + array);
// console.log(array, 0, array.length-1);
