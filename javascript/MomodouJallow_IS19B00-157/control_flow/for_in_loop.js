const person = {
    name:'Galleh',
    age: 23,
    address: 'Kartong'
}

for(let key in person) 
console.log(key, person[key]);


let selectedColors = ['red', 'blue', 'green']
for(let index in selectedColors)
console.log(index, selectedColors[index]);