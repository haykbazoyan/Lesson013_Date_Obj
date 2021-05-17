// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
// month/day/year,return the day-number of the year. All input strings in the tests are valid dates.
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function dayOfYear(string) {
  let result = 0;
  let date = new Date(string);

  for (let i = 1; i < date.getMonth() + 1; i++) {
    result += daysInMonth(i, date.getFullYear());
  }
  result += date.getDate();
  return result;
}

let days = dayOfYear("3/1/2004"); // 9

console.log(days);

/*
dayOfYear("12/13/2020") 348
dayOfYear("12/17/2020") 352
dayOfYear("11/16/2020") 321
dayOfYear("1/9/2019") 9
dayOfYear("3/1/2004") 61
dayOfYear("12/31/2000") 366
*/
