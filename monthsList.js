// The function should produce the same output even if dateStart is greater than dateEnd

function monthsInterval(dateStart, dateEnd) {
  let monthsStart = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let resultsIndex = [];
  let startArr = [];
  let endArr = [];

  if (dateStart.getFullYear() === dateEnd.getFullYear()) {
    for (let i = dateStart.getMonth(); i <= dateEnd.getMonth(); i++) {
      resultsIndex.push(monthsStart[i]);
    }
    return resultsIndex;
  }

  for (let i = dateStart.getMonth(); i <= 11; i++) {
    startArr.push(monthsStart[i]);
  }

  for (let i = 0; i <= dateEnd.getMonth(); i++) {
    endArr.push(monthsStart[i]);
  }
  if (dateStart.getMonth() === dateEnd.getMonth()) {
    endArr.pop();
  }
  resultsIndex = startArr.concat(endArr);

  return resultsIndex;
}

let january2017 = new Date(2017, 10, 1);
let january2018 = new Date(2018, 10, 1);
console.log(monthsInterval(january2017, january2018));

let december = new Date(2017, 11, 1);
let january = new Date(2018, 0, 1);
console.log(monthsInterval(december, january));
