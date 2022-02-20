// 1. Please write a function that shows the usage of closures

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

// const second = [9, 1, 22, 0, 2];
const sumArray = (arr) => {
  return arr.reduce((prevNum, num) => prevNum + num, 0);
};
// console.log(sumArray(second));

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

// const third = [[[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]];

const recursiveFn = (arr, acc = []) => {
  console.log(acc);
  if (arr.length <= 0) return acc;

  const [head, ...tail] = arr;

  return Array.isArray(head)
    ? recursiveFn([...head, ...tail], [...acc])
    : recursiveFn([...tail], [...acc, head]);
};
// console.log(recursiveFn(third));

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

// const fourthOne = ["b", 3, 4, 76, "c"];
// const fourthTwo = ["a", "b", 4, 76, 21, "e"];

const findCommon = (arr1, arr2) => arr1.filter((num) => arr2.includes(num));

// console.log(findCommon(fourthOne, fourthTwo));

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

// const fifthOne = ["b", 3, 4, 76, "c"];
// const fifthTwo = ["a", "b", 4, 76, 21, "e"];

const findDifferent = (arr1, arr2) => {
  return arr1
    .filter((num) => !arr2.includes(num))
    .concat(arr2.filter((num) => !arr1.includes(num)));
};

// console.log(findDifferent(fifthOne, fifthTwo));

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

// const sixthOne = [1, 2, 3, 4, 5, 6, 7];
// const sixthTwo = [4, 5, 6, 7];

const tuples = (arr1, arr2) => {
  let newArr = [];
  arr1.forEach((num, i) => {
    if (arr2[i] === undefined) return;
    newArr.push([num, arr2[i]]);
  });
  return newArr;
};
// console.table(tuples(sixthOne, sixthTwo));

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'
// const seventhArr = ["a", "b", "c", "d"];
// const seventhObj = { a: { b: { c: { d: "23" } } } };

const path = (arr, obj) => {
  let acc = obj;
  arr.forEach((elem) => {
    if (acc === undefined) {
      return;
    }
    Object.keys(acc).includes(elem) ? (acc = acc[elem]) : (acc = undefined);
  });
  return acc;
};
// console.log(path(seventhArr, seventhObj));

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

// const eightOne = { a: "b", c: "d" };
// const eightTwo = { c: "d", a: "b" };

const objEqual = (obj1, obj2) =>
  Object.entries(obj1)
    .flat()
    .every((x) => Object.entries(obj2).flat().includes(x)) &&
  Object.entries(obj2)
    .flat()
    .every((x) => Object.entries(obj1).flat().includes(x));
// console.log(objEqual(eightOne, eightTwo));

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

// const nineArr = ["color", "size"];
// const nineObj = { color: "Blue", id: "22", size: "xl" };

const objWithoutSomeKeys = (arr, obj) => {
  let acc = obj;
  arr.forEach((k) => {
    Object.keys(obj).includes(k) ? delete acc[k] : null;
  });
  return acc;
};
// console.log(objWithoutSomeKeys(nineArr, nineObj));
