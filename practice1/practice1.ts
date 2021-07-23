// 1. Создать интерфейс по такой объект:

interface UserInfo{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite:string;
        city: string;
        zipcode:string;
        geo:{
            lat: number;
            lng: number;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

const user: UserInfo = {
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
        }};

// 2.типизировать эту функцию:
//     function concat(text1, text2) {
//         return text1 + text2
//     }


function concat(text1:string, text2:string): string {
    return text1 + text2
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
class User{
    private _name:string;
    private _age:number;
    private _city:string;
    private status:boolean;

    constructor(name: string, age: number, city: string, status: boolean) {
        this._name = name;
        this._age = age;
        this._city = city;
        this.status = status;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }


    getCity(): string {
        return this._city;
    }

    setCity(value: string) {
        this._city = value;
    }

    changeStatus(newStatus: boolean){
        this.status = newStatus
    }
}

const karina = new User('Karina',15, 'Lviv', true);

console.log(karina.getName())
karina.setCity('Kyiv')
console.log(karina.getCity())
karina.changeStatus(false)
console.log(karina)


// 4.1) написать интерфейс Animal который описывает:
//     тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal




interface Animal{
    typeOfMovement: string;
    animalSounds: string;

    animalInfo(): string;
}

class Cat implements Animal{

}


