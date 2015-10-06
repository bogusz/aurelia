export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'Bogusz';
  lastName = 'Pękalski';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}
