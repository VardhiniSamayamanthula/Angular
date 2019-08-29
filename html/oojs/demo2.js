var person = /** @class */ (function () {
    function person(id, name, city, salary) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.salary = salary;
    }
    person.prototype.details = function () {
        return this.id + " " + this.name + " " + this.city + " " + this.salary;
    };
    return person;
}());
var empArr;
empArr = [new person(100, "harshhh", "elr", "77"),
    new person(101, "hhhh", "bglr", "77"),
    new person(102, "aaaaa", "hyd", "77")];
var i;
for (i = 0; i < empArr.length; i++) {
    console.log(empArr[i].name);
}
