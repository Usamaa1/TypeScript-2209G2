class Person {
    constructor(pName, pAge) {
        this.personName = pName;
        this.personAge = pAge;
    }
    get pName() {
        return this.personName;
    }
    set pN(personName) {
        this.personName = personName;
    }
}
let p1 = new Person('Zahid', 90);
let p2 = new Person('Ajmal', 45);
// p1.pN = 'Zahid';
console.log(p1);
console.log(p2);
