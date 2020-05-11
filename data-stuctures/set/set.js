let mySet = new Set();

mySet.add(1); // setting to [1]...
mySet.add(5);

mySet.add(5); // still will only be  [1,5]

mySet.add("a string"); // [1,5,'a string']

let o = {
  a: 1,
  b: 2,
};
mySet.add(o);

mySet.has(1); //true
mySet.has(3);
mySet.has(5);
mySet.has(Math.sqrt(25)); //true becaus it has 5
mySet.has("a STRING".toLowerCase());
mySet.has(o); //true

mySet.size;

mySet.delete(5);
mySet.has(5); // fals, five has been deleted

mySet.size;

console.log(mySet);

// iterating through a set

for (let item of mySet) console.log(item);
