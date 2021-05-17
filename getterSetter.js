// Write an object with getter/setter field name.

function getNamesToArray(string) {
  let namesArr = string.split(", ");
  let arArr = [];

  for (let i = 0; i < namesArr.length; i++) {
    arArr.push([namesArr[i], namesArr[i].length]);
  }
  return arArr;
}

const obj = {
  _name: [],
  set name(value) {
    let names = getNamesToArray(value);
    for (let i = 0; i < names.length; i++) {
      this._name.push(names[i]);
    }
  },
  get name() {
    return this._name;
  },
};

obj.name = "Vrezh, Artavazd";
console.log(obj.name); // [['Vrezh', 7], ['Artavazd', 10]]
