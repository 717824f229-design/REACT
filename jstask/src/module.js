export const college = "KCE";

export function greet() {
    console.log("Welcome Students");
}

export class Student {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log("Student Name:", this.name);
    }
}