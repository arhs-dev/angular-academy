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

const myName = new FullName('Dimitris', 'Kostaras');
myName.getFullname();

// Run command tsc names.ts to produce the names.js
