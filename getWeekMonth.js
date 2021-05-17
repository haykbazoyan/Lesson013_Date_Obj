const getWeekOfMonth = (date) => {
  let newDate = date;
  let day = newDate.getDate();
  let checker = 1;

  for (let i = 1; i <= day; i++) {
    newDate.setDate(i);
    let iteratorDay = newDate.getDay();

    if (iteratorDay === 0) {
      checker += 1;
    }
  }
  return checker;
};

const result = getWeekOfMonth(new Date(2017, 10, 9));
const result2 = getWeekOfMonth(new Date(2021, 4, 18));

console.log(result); // => 2
console.log(result2); // => 4
