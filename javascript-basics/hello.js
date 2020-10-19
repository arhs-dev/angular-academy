// Examples
// Example 1
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Peter';
user = {};

//Example 2
let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

alert(isEmpty(schedule)); // true

schedule['wakeUp'] = '8.30';

alert(isEmpty(schedule)); // false

// Example 3
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('Submit a', 0);
    this.b = +prompt('Submit b', 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
