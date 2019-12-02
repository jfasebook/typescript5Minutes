class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName:string) {
        this.fullName = [firstName, middleInitial, lastName].join(' ');
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person:Person) {
    return ['Hello', person.firstName, person.lastName].join(' ');
};

let user = new Student('Joan', 'B.', 'User'); //{ firstName: 'Joan', lastName: 'Bosch'};

document.body.textContent = greeter(user);