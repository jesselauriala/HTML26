const PASSING_SCORE = 5;

class Student {
    constructor(name, points) {
        this.name = name;
        this.points = points;
        

    }

    addPoints(amount) {
        this.points += amount;
    }

    greet() {
        console.log(`Hei, olen ${this.name} ja minulla on ${this.points} pistettä.`);
    }

    get grade() {
        return this.points >= PASSING_SCORE ? "Hyväksytty" : "Hylätty";
    }
}

const student1 = new Student("Jesse", 10);
const student2 = new Student("Lasse", 5);
const student3 = new Student("Jarkko", 3);

student1.addPoints(2);
student1.greet();
console.log(`${student1.name}: ${student1.grade}`);
console.log(`${student2.name}: ${student2.grade}`);
console.log(`${student3.name}: ${student3.grade}`);