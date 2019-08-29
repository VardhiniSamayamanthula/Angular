var Test = /** @class */ (function () {
    function Test() {
        this.age = 20;
    }
    Test.prototype.details = function () {
        return "hii,ua age is" + this.age;
    };
    return Test;
}());
var t = new Test();
console.log("details : " + t.details());
var user;
user = [7, 'vvvv', 'hhhh', 55555];
console.log("user details:" + user[1]);
var id;
id = 7;
id = "007";
console.log("id" + id);
