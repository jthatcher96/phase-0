// Tally Votes in JavaScript Pairing Challenge.

// I worked on this challenge with:
// This challenge took me [#] hours.

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property
of the respective office in voteCount.  After Alex's votes have been tallied,
voteCount would be ...
  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }
*/


/* Once the votes have been tallied, assign each officer position the name of the
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode


// __________________________________________
// Refactored Solution

function presidentVote(){
  for (var voterName in votes) {
  var candidate = votes[voterName]["president"]
  if (voteCount["president"].hasOwnProperty(candidate)) {
    voteCount["president"][candidate] += 1
  } else {
    voteCount["president"][candidate] = 1
  }}
}


function vicePresidentVote(){
  for (var voterName in votes) {
  var candidate = votes[voterName]["vicePresident"]
  if (voteCount["vicePresident"].hasOwnProperty(candidate)) {
    voteCount["vicePresident"][candidate] += 1
  } else {
    voteCount["vicePresident"][candidate] = 1
  }}
}

function secretaryVote(){
  for (var voterName in votes) {
  var candidate = votes[voterName]["secretary"]
  if (voteCount["secretary"].hasOwnProperty(candidate)) {
    voteCount["secretary"][candidate] += 1
  } else {
    voteCount["secretary"][candidate] = 1
  }}
}

function treasurerVote(){
  for (var voterName in votes) {
  var candidate = votes[voterName]["treasurer"]
  if (voteCount["treasurer"].hasOwnProperty(candidate)) {
    voteCount["treasurer"][candidate] += 1
  } else {
    voteCount["treasurer"][candidate] = 1
  }}
}


function presidentWinner(){
  var officeVoteTally = voteCount["president"];
  var maxVote = 0
  var winnerName = ""
  for (var candidate in officeVoteTally){
    var countVote = officeVoteTally[candidate];
    if (countVote > maxVote){
     maxVote = countVote
     winnerName = candidate
    }
  }
  officers.president = winnerName;
}


function vicePresidentWinner(){
  var officeVoteTally = voteCount["vicePresident"];
  var maxVote = 0
  var winnerName = ""
  for (var candidate in officeVoteTally){
    var countVote = officeVoteTally[candidate];
    if (countVote > maxVote){
     maxVote = countVote
     winnerName = candidate
    }
  }
  officers.vicePresident = winnerName;
}


function secretaryWinner(){
  var officeVoteTally = voteCount["secretary"];
  var maxVote = 0
  var winnerName = ""
  for (var candidate in officeVoteTally){
    var countVote = officeVoteTally[candidate];
    if (countVote > maxVote){
     maxVote = countVote
     winnerName = candidate
    }
  }
  officers.secretary = winnerName;
}

function treasurerWinner(){
  var officeVoteTally = voteCount["treasurer"];
  var maxVote = 0
  var winnerName = ""
  for (var candidate in officeVoteTally){
    var countVote = officeVoteTally[candidate];
    if (countVote > maxVote){
     maxVote = countVote
     winnerName = candidate
    }
  }
  officers.treasurer = winnerName;
}



presidentVote();
vicePresidentVote();
secretaryVote();
treasurerVote();
presidentWinner();
vicePresidentWinner();
secretaryWinner();
treasurerWinner();

// __________________________________________
// Reflection
/* What did you learn about iterating over nested objects in JavaScript?
It's real hard to keep track of, visualizing it in my head has honestly been the most helpful in not getting lost. I'd also really considering making a map of the nested objects if it gets too complicated.

Were you able to find useful methods to help you with this?
No new methods were used really, but the complexity of the loops were definitely a challenge for us.

What concepts were solidified in the process of working through this challenge?
I'm not sure about solidified, but I'm definitely much better at moving through nested objects in Javascript. I'll need more practice!
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
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)