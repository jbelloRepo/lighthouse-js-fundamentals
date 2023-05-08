// const chorus = "Let's dance!";
// for (let repeat = 0; repeat < 10; repeat++) {
//   console.log(chorus);
// }
// console.log("Until the sun comes up!");

// for (let i = 100; i <= 200; i++) {
//     console.log(i)
//   if (i % 3 === 0 && i % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (i % 3 === 0) {
//     console.log("Loopy");
//   } else if (i % 4 === 0) {
//     console.log("Lighthouse");
//   }
// }

// creates a line of * for a given length
function makeLine(length) {
    // console.log(length);
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(width){
    // console.log(width)
    line = ""
    for(let i=1; i<=width; i++){
        line += makeLine(i);
    }
    // line += makeLine(width);
    return line;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));