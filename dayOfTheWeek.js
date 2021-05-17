/* 
Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", or "Saturday".
*/

function findDayOfTheWeek(string) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(string);

  let day = date.getDay();
  return weekDays[day];
}

let day = "02/13/2021";

console.log(findDayOfTheWeek(day));
