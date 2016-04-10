/*
Gradebook from Names and Scores
I worked on this challenge [by myself, with:]
This challenge took me [#] hours.
You will work with the following two variables.  The first, students, holds the names of four students.
The second, scores, holds groups of test scores.  The relative positions of elements within the two
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).
Do not alter the students and scores code.
*/

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]






// __________________________________________
// Write your code below.
// var gradebook = {};

// for (var i in students){
//   gradebook[students[i]] = {};
//   gradebook[students[i]]["testScores"] = scores[i];
// };

// gradebook["addScore"] = function(name,score){
//   gradebook[name]["testScores"].push(score);
// };

// gradebook["getAverage"] = function(name){
//   var studentAverage = average(gradebook[name].testScores);
//   return studentAverage;
// };

// var average = function (array) {
//     var total = 0;
//     for(var i in array) {
//       total += array[i];
//     };
//     return total / array.length;
// };





// FOR RELEASE 4 -->> Research further
//  function addScore(name,score){
//     this.name = name;
//     this.score = score;
//    gradebook[name]["testScores"].push(score);
//  };
// gradebook["addScore"] = addScore("Susan",99);
// _____________

// FOR RELEASE 5 to 7:  MORE ATTEMPTS USING THIS KEYWORD
// function average (array) {
//   // this.array = array
//   // this.average = function () {
//     var total = 0;
//     for(var i in array) {
//       total += array[i];
//     };
//     var average = total / array.length
//     return avg;
//    // };
// };


// function gradebook (avg) {
//   this.avg = avg;
//   this.average = function (array) {
//     var total = 0;
//     for(var i in array) {
//       total += array[i];
//     };
//     this.avg = total / array.length;
//   };
// };







// __________________________________________
// Refactored Solution

// Release 1: create variable gradebook and assign to empty object:
var gradebook = {};

// Release 2: make each student name a property of gradebook and assign each value to a new object
for (var i in students){
  gradebook[students[i]] = {};
  gradebook[students[i]]["testScores"] = scores[i];
};

// Release 3 to 4: give each property of gradebook its own testcores property
gradebook["addScore"] = function(name,score){
  gradebook[name]["testScores"].push(score);
};

// Release 5 & 7: function to calculate average score
gradebook["getAverage"] = function(name){
  return average(gradebook[name].testScores);
};

// Release 6: function that accepts array of integers and returns the average of those integers.
var average = function (array) {
    var total = 0;
    for(var i in array) {
      total += array[i];
    };
    return total / array.length;
};







// __________________________________________
// Reflect



/*
What did you learn about adding functions to objects?
The syntax took while for us to iron out, and we spent awhile going in the completely wrong direction. But now that I see it working, using in the future will be easier.
How did you iterate over nested arrays in JavaScript?
Using the for/ in loop ensures you iterate through every cell.
Were there any new methods you were able to incorporate? If so, what were they and how did they work?
No new methods were used but we had our hands full working with object functions!
 */





// __________________________________________
// Test Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}



assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "1. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "2. "
)

assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "3. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "4. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "5. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "6. "
)

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "7. "
)
assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Joseph'.",
  "9. "
)