// 1. Создать интерфейс по такой объект:
var user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: -37.3159,
            lng: 81.1496
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
// 2.типизировать эту функцию:
//     function concat(text1, text2) {
//         return text1 + text2
//     }
function concat(text1, text2) {
    return text1 + text2;
}
console.log(concat('conca', 'tenation'));
// 3.создать класс юзера с полями name, age, city, status
// и методами:
//     getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
//TODO не впевнена, що вірно зрозуміла умову завдання
var User = /** @class */ (function () {
    function User(name, age, city, status) {
        this._name = name;
        this._age = age;
        this._city = city;
        this.status = status;
    }
    User.prototype.getName = function () {
        console.log(this._name);
        return this._name;
    };
    User.prototype.setName = function (value) {
        this._name = value;
    };
    User.prototype.getAge = function () {
        return this._age;
    };
    User.prototype.setAge = function (value) {
        this._age = value;
    };
    User.prototype.getCity = function () {
        return this._city;
    };
    User.prototype.setCity = function (value) {
        this._city = value;
    };
    User.prototype.changeStatus = function (newStatus) {
        this.status = newStatus;
    };
    return User;
}());
var karina = new User('Karina', 15, 'Lviv', true);
console.log(karina.getName());
karina.setCity('Kyiv');
console.log(karina.getCity());
karina.changeStatus(false);
console.log(karina);
