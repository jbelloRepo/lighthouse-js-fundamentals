const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

function lastIndexOf(array, value) {
  let index = [];
  //   console.log(array, value);
  //   console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index.push(i);
    }
  }
  console.log(index.length);
  if (index.length === 0) {
    return -1;
  } else {
    return index[index.length - 1];
  }
}

// // console.log(lastIndexOf([0, 1, 4, 1, 2], 1));

// function concat(arr1, arr2) {
//   let newArr = [];
//   arr1.forEach(myFun);
//   arr2.forEach(myFun);

//   function myFun(item) {
//     newArr.push(item);
//     console.log(newArr)
//   }
// }
// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let arr = [];
  for (let i = 0; i < vegetables.length; i++) {
    arr.push(vegetables[i][metric]);
    // console.log(vegetables[i][metric]);
    // console.log(arr)
  }
  //   console.log(Math.max.apply(Math, arr))

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] === Math.max.apply(Math, arr)) {
      return vegetables[i]["submitter"];
    }
  }
};

judgeVegetable(vegetables, metric);
