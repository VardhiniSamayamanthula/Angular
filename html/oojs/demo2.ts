class person{
    constructor(public id:number,public name:string,public city:string,public salary:string){}

    details() : string{
        return this.id+" "+this.name+" "+this.city+" "+this.salary;
    }
}

export class Employee extends person{
    constructor(public id:number,public name:string,public city:string,public salary:string,public age:number){
       super(id,name,city,salary);
        this.age = age;
    }
}
let empArr :[Employee,Employee,Employee];

empArr = [new Employee(100,"harshhh","elr","77",20),
new Employee(101,"hhhh","bglr","77",21),
new Employee(102,"aaaaa","hyd","77",22)];

let i : number;
for(i = 0;i < empArr.length;i++){
    console.log(empArr[i].name);
}

