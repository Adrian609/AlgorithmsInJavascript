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

// Implementing basic set operations

function isSuperSet(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        if (setA.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }
    return _difference;
}

function difference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

isSuperSet(setA, setB);
union(setA, setC);
intersection(setA, setC);
symmetricDifference(setA, setC);
difference(setA, setC);

console.log(isSuperSet(setA, setB));
console.log(union(setA, setC));
console.log(intersection(setA, setC));
console.log(symmetricDifference(setA, setC));
console.log(difference(setA, setC));

// remove duplicate elements in an array

const num = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log([...new Set(num)]);

// string relationships

let text = 'India';
let state = 'America';

let anotherSet = new Set(text);

console.log(anotherSet);

console.log(new Set('Firefox')); // creates an object

console.log([...new Set('firefox')]); // creates an array