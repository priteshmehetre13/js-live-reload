class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = Person.#validate(firstName);
      this.#lastName = Person.#validate(lastName);
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
    static #validate(name) {
      if (typeof name === 'string') {
        let str = name.trim();
        if (str.length >= 3) {
          return str;
        }
      }
      throw 'The name must be a string with at least 3 characters';
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
  let person = new Person('John', 'Doe');
  console.log(person.getFullName());