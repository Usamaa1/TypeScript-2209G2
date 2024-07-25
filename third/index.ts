// type secretType = string | number;


// let secretCode :secretType;

// let countryCode: secretType;

// secretCode = 2343;
// secretCode = '23eee'

// countryCode = 23;
// countryCode = 'jfksdajk';

// console.log(secretCode, countryCode);


interface Person {
    name:string;
    age: number;
    phoneNumber:number;
    city:string;
    isAlive:boolean;
    country:string;
}

class UKPerson implements Person{

    name:string;
    age: number;
    phoneNumber:number;
    city:string;
    isAlive:boolean;
    country:string;

    constructor(name:string, age:number, phoneNumber:number, city:string, isAlive:boolean, country:string)
    {
        this.name = name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.city=city;
        this.isAlive=isAlive;
        this.country=country;
    }
}

class PKPerson extends UKPerson
{
    domicile:string;

    constructor(name:string, age:number, phoneNumber:number, city:string, isAlive:boolean, country:string,doimcile:string)
    {
        super(name, age, phoneNumber, city, isAlive, country);
        this.domicile = doimcile;
    }

}

let pk1 = new PKPerson('Zafar',23,3478932748,'Karachi',true,"Pakistan",'Lahore');


console.log(pk1);









