const hello = "Bangladesh";
let bye = "World";

const person = {
    name: "John",
    age: 21,
    address: {
        street: "Hindu para",
        village: "Charkwaya",
        town: "Barishal"
    },
    job: "Student"
}

const resultTemplateString = `Hello my name is ${person.name} and my age is ${person.age} 
I am a ${person.job} my town is ${person.address.town} my country is ${hello}. I love my ${bye}`
console.log(resultTemplateString);