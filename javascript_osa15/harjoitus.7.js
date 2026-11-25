class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hei, olen ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    study() {
        console.log(`${this.name} opiskelee kurssia ${this.course}.`);
    }

    introduce() {
        console.log(`Hei, olen ${this.name} ja opiskelen kurssia ${this.course}.`);
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} opettaa ainetta ${this.subject}.`);
    }

    introduce() {
        console.log(`Hei, olen ${this.name} ja opetan ainetta ${this.subject}.`);
    }
}


