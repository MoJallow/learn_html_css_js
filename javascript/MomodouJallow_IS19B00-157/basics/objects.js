let person = {
    name:'Galleh',
    age:30,
    address:'Kartong'
}

// print name
console.log(person.name);
console.log(person['name']);

// change name
person.name = 'Awa';
console.log(person.name);

// change address
person['address'] = 'Mukono';
console.log(person['address'])
