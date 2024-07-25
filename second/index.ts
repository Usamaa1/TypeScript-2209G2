class Person{
    
   public personName :string;
   public personAge :number;

   constructor(pName:string, pAge:number)
   {
      this.personName = pName;
      this.personAge = pAge;
   }


   public get pName() : string
   {
    return this.personName
   }
   public set pN(personName:string)
   {
      this.personName = personName;
   }

}

let p1 = new Person('Zahid',90);
let p2 = new Person('Ajmal',45);

// p1.pN = 'Zahid';

console.log(p1);
console.log(p2);




