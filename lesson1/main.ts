function numberArgsFn(a: number, b: number) {

}

numberArgsFn(10, 20);

// numberArgsFn ('123', '890') error

function stringArgsFn(a: string, b: string, c: string) {

}

stringArgsFn('qwe', 'asd', 'zxc');

class UserType1 {
    name: string; //= 'honey', присвоить значение можн сразу через = , тогда нет необходимости задавать тип 'string'
    age: number;
    status: boolean;

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    info(): string {
        return this.name
    }
}


function paramertizationFn(
    str: string,
    num: number,
    truest: boolean,
    user: UserType1,
    arr: any [],
    skills: string [],
    users: { name: string, age: number } [],
) {

}

paramertizationFn(
    'okten',
    100500,
    true,
    //{name: 'vasya', age: 20, status: true},
    new UserType1('vasya', 20, true),
    [1, 4, 'ok', true],
    ['js', 'css', 'html'],
    [{name: 'olya', age: 25}, {name: 'karina', age: 15}, {name: 'kokos', age: 123}]
);

interface Car {
    model: string;
    power: number;
    producer?: string;
    // drive: () => void; //функція яка нічого не повертає (синтаксис) + обов'язкове слово void
    drive: (a: number) => number;
}

// ?: називается Елвіс, показує що ця властивість не є обов'язковою

function tuningCar(car: Car) {

}

tuningCar({
    model: 'subaru',
    power: 255,
    producer: 'FHI',
    drive: function (a) {
        return 100500
    }
})
tuningCar({
    model: 'subaru',
    power: 255,
    drive: function (a) {
        console.log('hello');
        return 12345
    }
})


class Subaru implements Car {

    model: string;
    power: number;
    producer: string;
    awd: boolean = true;

    drive(a: number): number {
        return 0;
    }

    constructor(model: string, power: number, producer: string, awd: boolean) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.awd = awd;
    }

    foobar(): void {

    }
}

class Toyota implements Car {

    model: string;
    power: number;
    producer: string;
    price: number;

    drive(a: number): number {
        return 0;
    }


    constructor(model: string, power: number, producer: string, price: 43000) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.price = price;
    }
}

let cars: Car[] = [
    new Subaru('legacy', 165, 'subaru', true),
    new Toyota('camry', 265, 'toyota', 43000)
]

let firstCar = cars[0] as Subaru;

// firstCar.foobar(); класс Car відсікає всі відмінні хар-ки і ф-ції Subaru, які не відносяться до классу Car і не дає можливості їх викликати
// інтерфейс -це загальний знаменник для різних класів і обмежувач (відсікач) непотрібних хар-к і методів (ф-цій), щоб це пофіксити
// потрібно указати as Subaru - це кастомізація, тобто приведення типів, тобто те що ми отримали в firstCar сприймати як об'єкт класу Subaru

console.log(firstCar.awd) // після кастомізації помилку не видає

// PRIVATE
class Client {
    private name: string;
    private age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // ф-ція (замість геттерів та сеттерів) яка дозволяє змінювати значення відповідної хар-ки, з умовою
    setNewAge(newAge){
        if(newAge > 0 ) {
            this.age = newAge
        }

    }

    // _age должна назіваться характеристика private _age: number; и this._age = age;
    //  установила горячие клавиши для візова - option+G
    // get age(): number {
    //     return this._age;
    // }
    //
    // set age(value: number) {
    //     this._age = value;
    // }
}

let client = new Client('kolya', 31);

// client.age = -100; private - забороняє звернутися до поля age і змінювати його, це і є інкапсуляція

client.setNewAge(-100);

// ENUM - клас, який визначає об'єкти свого типу. ENUM - перечислення, це клас, в якому створені всі об'єкти цього типу, які ми взагалі можемо створити
// ENUM в основному використовують для вибору http-методів н-д GET, POST, DELETE, PUT, за для уникнення орфографічних помилок  в назвах методів
enum Gender{
   MALE='male',
   FEMALE = 'female'
}

function foobar2(gender: string) {

}
foobar2('dog')

function foobars3(gender: Gender) {
console.log(gender)
}

foobars3(Gender.FEMALE)





