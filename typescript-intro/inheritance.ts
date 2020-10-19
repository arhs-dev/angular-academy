class FullName {
  firstName: string;
  lastName: string;
  constructor(firstname: string, lastname: string) {
    this.firstName = firstname;
    this.lastName = lastname;
  }
  getFullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Age extends FullName {
  age: number;
  constructor(firstname: string, lastname: string, age: number) {
    super(firstname, lastname);
    this.age = age;
  }

  getMyAge(): number {
    return this.age;
  }
}

const myInfo = new Age('Dimitris', 'Kostaras', 18);
console.log(`I am ${myInfo.getFullname()} and my age is ${myInfo.getMyAge()}`);

// Run command tsc inheritance.ts to produce the inheritance.js
