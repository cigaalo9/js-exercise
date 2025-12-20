let peapole=[

    {name:"nimco",age:50,city:"xamar"},
    {name:"cigal",age:20,city:"jigjiga"},
    {name:"asma",age:40,city:"hargaisa"}
]

console.log("properties and values of each person")



for (let person of peapole) {
//     console.log(peapole[0])  
//    console.log(peapole[1])
    console.log('name: ', person.name);
    console.log('age:  ', person.age);
    console.log('city: ', person.city);
    console.log("---"); // space/blank line between persons
}
