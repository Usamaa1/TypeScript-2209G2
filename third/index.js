// type secretType = string | number;
class UKPerson {
    constructor(name, age, phoneNumber, city, isAlive, country) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.isAlive = isAlive;
        this.country = country;
    }
}
class PKPerson extends UKPerson {
    constructor(name, age, phoneNumber, city, isAlive, country, doimcile) {
        super(name, age, phoneNumber, city, isAlive, country);
        this.domicile = doimcile;
    }
}
let pk1 = new PKPerson('Zafar', 23, 3478932748, 'Karachi', true, "Pakistan", 'Lahore');
console.log(pk1);
