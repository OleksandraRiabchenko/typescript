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
        return this._name;
    };
    User.prototype.setName = function (newName) {
        this._name = newName;
    };
    User.prototype.getAge = function () {
        return this._age;
    };
    User.prototype.setAge = function (newAge) {
        this._age = newAge;
    };
    User.prototype.getCity = function () {
        return this._city;
    };
    User.prototype.setCity = function (newCity) {
        this._city = newCity;
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
var Cat = /** @class */ (function () {
    function Cat(animalSounds, typeOfMovement) {
        this.animalSounds = animalSounds;
        this.typeOfMovement = typeOfMovement;
    }
    Cat.prototype.animalInfo = function () {
        return "animalSounds: " + this.animalSounds + ", typeOfMovement: " + this.typeOfMovement;
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(animalSounds, typeOfMovement, name) {
        this.animalSounds = animalSounds;
        this.typeOfMovement = typeOfMovement;
        this.name = name;
    }
    Bird.prototype.animalInfo = function () {
        return "name: " + this.name + ", animalSounds: " + this.animalSounds + ", typeOfMovement: " + this.typeOfMovement;
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(animalSounds, typeOfMovement, age) {
        this.animalSounds = animalSounds;
        this.typeOfMovement = typeOfMovement;
        this.age = age;
    }
    Fish.prototype.animalInfo = function () {
        return "age: " + this.age + ", animalSounds: " + this.animalSounds + ", typeOfMovement: " + this.typeOfMovement;
    };
    return Fish;
}());
var rudy = new Cat('Meaw!', 'walks');
rudy.animalInfo();
var kesha = new Bird('Karrr', 'flies', 'Kesha');
kesha.animalInfo();
var nemo = new Fish('Bulk', 'swims', 2);
nemo.animalInfo();
