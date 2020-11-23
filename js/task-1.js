const Account = function (login, email) {
    this.login = login;
    this.email = email;
    
};

Account.prototype.getInfo = function () {
    return `Login: ${this.login}, Email: ${this.email}`
};


console.log(typeof Account.prototype.getInfo); // function





const mango = new Account('Mangozedog', 'mango@dog.woof');

console.log(mango.getInfo());
 // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');

console.log(poly.getInfo());; // Login: Poly, Email: poly@mail.com