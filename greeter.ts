interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person:Person) {
    return ['Hello', person.firstName, person.lastName].join(' ');
};

let user = { firstName: 'Joan', lastName: 'Bosch'};

document.body.textContent = greeter(user);