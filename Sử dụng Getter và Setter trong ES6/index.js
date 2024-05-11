class Person {
    constructor(name) {
        this._name = name
    }
    set name(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    walk() {
        console.log(`${this._name} is walking`);
    }
}

class Programmer extends Person {
    constructor(name,programLang) {
        super(name);
        this._programLang = programLang;
    }
    set programLang(programLang) {
        this._programLang = programLang
    }
    get programLang() {
        return this._programLang
    }
    writeCode() {
        console.log(`${this._name} is coding by ${this._programLang}`);
    }
}

let p1 = new Programmer("John","Javascript")
console.log(p1.name);
console.log(p1.programLang);
p1.walk()
p1.writeCode()