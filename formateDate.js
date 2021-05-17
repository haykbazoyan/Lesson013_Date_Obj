function formatDate(date) {
  let months = [
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
  let newDate = date;
  let month = newDate.getMonth();
  let result = `${newDate.getDate()} ${months[month]} ${newDate.getFullYear()}`;

  return result;
}

console.log("Actual output: ", formatDate(new Date("2020-05-14")));
