class Person{
    constructor(id,name,city){
        this.id = id;
        this.name = name;
        this.city  = city;
        
    }

    details(){
        return this.id+" "+this.name+" "+this.city;
    }
}


let p = new Person(100,"vardhini","hydd");
console.log(p.details());

class Emp extends Person{

    constructor(id,name,city,salary){
        super(id,name,city);
        this.salary = salary;
    }
    details(){
        return super.details()+' '+this.salary;
    }
}

let e1 = new Emp(200,"asdf","bglr",7500);
console.log("emp det:"+e1.details());
