// The input is object, which keys are student's names and values are array of their scores. Find the student with the best average score.
/*
let studentsScores = {
  John: [100, 80, 90],
  Bob: [100, 70, 90],
};

function getBestStudent(object) {
  let bestScore = 0;
  let winner = "";
  for (const key in object) {
    let currentScore = 0;
    for (const iterator of object[key]) {
      currentScore += iterator;
    }
    currentScore /= object[key].length;
    if (currentScore > bestScore) {
      winner = key;
      bestScore = currentScore;
    }
  }
  return winner;
}
let obj = {
  John: [100, 90, 80],
  Bob: [100, 100, 80],
};
let students = getBestStudent(obj);

console.log(students);
*/

// WITH REDUCE METHOD !!!!!!!!!!!!!!!

let studentsScores = {
  John: [100, 80, 90],
  Bob: [100, 70, 90],
};

function getBestStudent(object) {
  let bestScore = 0;
  let winner = "";

  for (const key in object) {
    let currentScore = object[key].reduce((acc = 0, el) => {
      return (acc += el);
    });

    if (currentScore > bestScore) {
      winner = key;
      bestScore = currentScore;
    }
  }
  return winner;
}

let obj = {
  John: [100, 90, 80],
  Bob: [100, 10, 80],
};
let students = getBestStudent(obj);

console.log(students);
