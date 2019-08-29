function greet(name){
    console.log("welcome to oojs"+name);
}

greet('vardhini');

let emp= [{id:100,name:'vardhini',city:'hyd',salary:70000},
{id:101,name:'jyoo',city:'hydd',salary:90000},
{id:102,name:'asdf',city:'hyyd',salary:20000}];

console.log(emp.name);

for(let i = 0;i < emp.length;i++){
    console.log(emp[i].name);
}
