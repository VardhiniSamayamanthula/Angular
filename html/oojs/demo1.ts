class Test{
    public age : number=20;

    details():string{
        return "hii,ua age is"+this.age;
    }

}

let t = new Test();
console.log("details : "+t.details());


let user : [number,string,string,number];
user=[7,'vvvv','hhhh',55555];
console.log("user details:"+user[1]);



let id:(number|string);
id = 7;
id = "007";
console.log("id"+id);


