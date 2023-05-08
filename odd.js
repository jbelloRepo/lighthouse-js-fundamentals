function isOdd(num) {
  if (num % 2 === 0) {
    return "false";
  } else {
    return "true";
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

// const moves = ["north", "north", "west", "west", "north", "east", "north"];
// console.log(moves.length);

const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0;
  let y = 0;
  for (let i = 0; i <= moves.length; i++) {
    if (moves[i] === "north") {
      y += 1;
    } else if (moves[i] === "south") {
      y -= 1;
    } else if (moves[i] === "west") {
      x -= 1;
    } else if (moves[i] === "east") {
      x += 1;
    }
  }
  console.log([x,y])
  return [x, y];
};

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

// Do not modify these first two lines
let iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
iceCreamFlavours.push("root beer")
console.log(iceCreamFlavours);