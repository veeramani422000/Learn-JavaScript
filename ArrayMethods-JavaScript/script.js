//An Array in is used to store a collection of value,such as list of numbers
//list of name and etc...

//Methods or function : push(),pop(),unshift(),shift(),splice(),indexOf()
//lastIndexOf(),includes(),split(),slice(),concat(),join(),reverse(),sort()
//toString(),map(),reduce(),find(),filter(),some(),every(),foreach()

let arr = [1, 2, 3, 4, 5];
let strArr = ["veera", "mani", "karma", "selva", "ganesh"];
// let splitNum = 145;
let splitStr = "hello world i am learning javascript";

// arr[5] = 6;

// arr[2] = 4;

// delete arr[5];
  ``
// console.log(arr.length);

console.log(arr);

// ====PUSH==== add element to the end of array

// let newPushNum = arr.push(6); //Return a length of array.
// console.log(newPushNum); //o/p-6

// console.log(arr); //o/p-[1,2,3,4,5,6]

// let newPushStr = strArr.push('gopal');
// console.log(newPushStr); //o/p-6

// console.log(strArr); //['veera','mani','karma','selva','ganesh','gopal'];

// // ====POP==== remove element to the end of array

// let newPopNum = arr.pop(); //Return a last array element.
// console.log(newPopNum); //o/p-5

// console.log(arr); //o/p-[1,2,3,4]

// let newPopStr = strArr.pop();
// console.log(newPopStr); //o/p-ganesh

// console.log(strArr); //['veera','mani','karma','selva'];

// // ====UNSHIFT==== add element to the start array

// let newUnshiftNum = arr.unshift(6); //Return a length of array.
// console.log(newUnshiftNum); //o/p-6

// console.log(arr); //o/p-[6,1,2,3,4,5]

// let newUnshiftStr = strArr.unshift('gopal');
// console.log(newUnshiftStr); //o/p-6

// console.log(strArr); //['gopal','veera','mani','karma','selva','ganesh'];

// // ====SHIFT==== remove element to the start array

// let newShiftNum = arr.shift(); //Return a remove first array item.
// console.log(newShiftNum); //o/p-1

// console.log(arr); //o/p-[2,3,4,5]

// let newShiftStr = strArr.shift();
// console.log(newShiftStr); //o/p-veera

// console.log(strArr); //['mani','karma','selva','ganesh'];

// // ===Splice=== change content of two array

// // let num = [1,2,3,4]

// let newSpliceNum = arr.splice(1,2,6,7); //return a delete array value
// console.log(newSpliceNum);//o/p-[2,3]

// console.log(arr);

// let newSpliceStr = strArr.splice(2,0,"is hero");
// console.log(newSpliceStr);//o/p-['veera','mani','is hero',karma','selva','ganesh'];

// console.log(strArr);

// // ===Slice=== create a new array

// let newSliceNum = arr.slice(2,4); //returns a shallow copy
// console.log(newSliceNum);//o/p-[3,4,5] start to end(end not included)

// // console.log(arr);

// let newSliceStr = strArr.slice(2,4);
// console.log(newSliceStr);//o/p-[ 'karma', 'selva' ]

// // console.log(strArr);

// // ===Split=== a String into an ordered list of substrings

// let newSplitStr = splitStr.split();

// console.log(newSplitStr); //returns the array.o/p-[ 'hello world i am learning javascript' ]

// // ===indexOf=== Returns the first index (position) of a specified value.

// let newIndexofNum = arr.indexOf(4); //returns -1 if the value is not found.

// console.log(newIndexofNum) ;//o/p-3

// let newIndexofStr =  strArr.indexOf('mani');
// console.log(newIndexofStr);//o/p-1

// // ===lastIndexOf=== Returns the last index (position) of a specified value.

// let newLastindexofNum = arr.lastIndexOf(5); //returns -1 if the value is not found.

// console.log(newLastindexofNum) ;//o/p-3

// let newLastindexofStr =  strArr.lastIndexOf('mani');
// console.log(newLastindexofStr);//o/p-1

// // ===INCLUDE===  returns true

// let newIncludeNum = arr.includes(4);

// console.log(newIncludeNum) ;//o/p-true

// let newIncludestr =  strArr.includes('rani');
// console.log(newIncludestr);//o/p-false

// // ===CONCAT=== concatenates (joins) two or more arrays.

// let newConcat = arr.concat(strArr);//returns a new array

// console.log(newConcat);//o/p-[ 1,2,3,4,5,'veera','mani','karma','selva','ganesh']

// // ===JOIN=== does not change the original array.

// let newjoin = arr.join('');//returns an array as a string.
// console.log(newjoin);//o/p-12345

// // let newJoin = splitStr.join();
// // console.log(newJoin)

// // ===REVERSE=== reverses the order of the elements in an array.

// let newReverse = arr.reverse();
// console.log(newReverse);//o/p-[ 5, 4, 3, 2, 1 ]

// // ===SORT=== sorts the elements of an array.
// let newSort = strArr.sort();
// console.log(newSort);//o/p-[ 'ganesh', 'karma', 'mani', 'selva', 'veera' ]

// // ===TOSTRING=== returns a string with array values separated by commas.

// let newTostring = strArr.toString();
// console.log(newTostring);//o/p-veera,mani,karma,selva,ganesh

// //===MAP===Create a new array with modified value based on the original array
// //elements.

// let newMap = arr.map((val)=> {
// let newVal = val*2 ;
// return newVal
// })
//   console.log(newMap);

// ===FOREACH=== foreach method is used to access each items of the array

// let newForeach = arr.forEach((ele,index,array)=> console.log('index:'+index,ele,array));

// const scores = [12, 55, 70, 47];

// let total = 0;
// scores.forEach((score) => {
//   total += score
//   // total = total+score;
// });

// console.log(total);

const datas = [
  {
    name: "veeramani",
    age: 23,
    qualification: "MCA",
    work: "frontend Developer",
    isAlive: true,
  },
  {
    name: "Vijay",
    age: 23,
    qualification: "MCA",
    work: "AI Developer",
    isAlive: true,
  },
  {
    name: "Manikandan",
    age: 23,
    qualification: "MCA",
    work: "Backend Developer",
    isAlive: true,
  },
  {
    name: "Arunsingh",
    age: 23,
    qualification: "MCA",
    work: "Fullstack Developer",
    isAlive: true,
  },
  {
    name: "Goapl",
    age: 26,
    qualification: "MCA",
    work: "Backend Developer",
    isAlive: true,
  },
];

// let newData = datas.map((data) => {
//   let val = data.name;
//   return val;
// });
// console.log(newData);
