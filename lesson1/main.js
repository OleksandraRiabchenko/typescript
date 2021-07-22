function numberArgsFn(a, b) {
}
numberArgsFn(10, 20);
// numberArgsFn ('123', '890') error
function stringArgsFn(a, b, c) {
}
stringArgsFn('qwe', 'asd', 'zxc');
var UserType1 = /** @class */ (function () {
    function UserType1(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    UserType1.prototype.info = function () {
        return this.name;
    };
    return UserType1;
}());
function paramertizationFn(str, num, truest, user, arr, skills, users) {
}
paramertizationFn('okten', 100500, true, 
//{name: 'vasya', age: 20, status: true},
new UserType1('vasya', 20, true), [1, 4, 'ok', true], ['js', 'css', 'html'], [{ name: 'olya', age: 25 }, { name: 'karina', age: 15 }, { name: 'kokos', age: 123 }]);
// ?: називается Елвіс, показує що ця властивість не є обов'язковою
function tuningCar(car) {
}
tuningCar({
    model: 'subaru',
    power: 255,
    producer: 'FHI',
    drive: function (a) {
        return 100500;
    }
});
tuningCar({
    model: 'subaru',
    power: 255,
    drive: function (a) {
        console.log('hello');
        return 12345;
    }
});
var Subaru = /** @class */ (function () {
    function Subaru(model, power, producer, awd) {
        this.awd = true;
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.awd = awd;
    }
    Subaru.prototype.drive = function (a) {
        return 0;
    };
    Subaru.prototype.foobar = function () {
    };
    return Subaru;
}());
var Toyota = /** @class */ (function () {
    function Toyota(model, power, producer, price) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.price = price;
    }
    Toyota.prototype.drive = function (a) {
        return 0;
    };
    return Toyota;
}());
var cars = [
    new Subaru('legacy', 165, 'subaru', true),
    new Toyota('camry', 265, 'toyota', 43000)
];
var firstCar = cars[0];
// firstCar.foobar(); класс Car відсікає всі відмінні хар-ки і ф-ції Subaru, які не відносяться до классу Car і не дає можливості їх викликати
// інтерфейс -це загальний знаменник для різних класів і обмежувач (відсікач) непотрібних хар-к і методів (ф-цій), щоб це пофіксити
// потрібно указати as Subaru - це кастомізація, тобто приведення типів, тобто те що ми отримали в firstCar сприймати як об'єкт класу Subaru
console.log(firstCar.awd); // після кастомізації помилку не видає
// PRIVATE
var Client = /** @class */ (function () {
    function Client(name, age) {
        this.name = name;
        this.age = age;
    }
    // ф-ція (замість геттерів та сеттерів) яка дозволяє змінювати значення відповідної хар-ки, з умовою
    Client.prototype.setNewAge = function (newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    };
    return Client;
}());
var client = new Client('kolya', 31);
// client.age = -100; private - забороняє звернутися до поля age і змінювати його, це і є інкапсуляція
client.setNewAge(-100);
// ENUM - клас, який визначає об'єкти свого типу. ENUM - перечислення, це клас, в якому створені всі об'єкти цього типу, які ми взагалі можемо створити
// ENUM в основному використовують для вибору http-методів н-д GET, POST, DELETE, PUT, за для уникнення орфографічних помилок  в назвах методів
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (Gender = {}));
function foobar2(gender) {
}
foobar2('dog');
function foobars3(gender) {
    console.log(gender);
}
foobars3(Gender.FEMALE);
