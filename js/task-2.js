class User {
    constructor(name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}
const mango = new User('Mango', 2, 20);

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User('Poly', 3, 17,);

poly.getInfo(); // User Poly is 3 years old and has 17 followers








// Write code under this line
// console.log(typeof User);
// 'function'

// console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'
// console.log(typeof mango.getInfo);
// 'function'
// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'