const assert = require('assert').strict;

function createPerson(name, lastname, years, gender, address) {
    return {
        name: name,
        lastname: lastname,
        age: years,
        gender: gender,
        address: address
    }
}

let person = createPerson('Alejandro', 'Alagon', 21, 'male', 'calle 33');
assert.strictEqual(person.name, 'Alejandro');
assert.strictEqual(person.lastname, 'Alagon');
assert.strictEqual(person.age, 21);
assert.strictEqual(person.gender, 'male');
assert.strictEqual(person.address, 'calle 33');

console.log(person);
