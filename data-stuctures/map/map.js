let myMap = new Map();

let keyString = "a String";
let keyObj = {};
let keyFunc = function () {};

myMap.set(keyString);
myMap.set(keyObj);
myMap.set(keyFunc);

myMap.size;

myMap.get(keyString);
myMap.get(keyObj);
myMap.get(keyFunc);

myMap.get("a string");
myMap.get({});
myMap.get(function () {});

/// merging to maps

let first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

let second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

let merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

console.log(merged);
console.log(first);
console.log(second);
