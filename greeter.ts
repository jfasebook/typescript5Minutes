function greeter(person:string) {
    return 'Hello, ' + person;
};

let user = 'Joan Bosch';

document.body.textContent = greeter(user);