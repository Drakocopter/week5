// last place you look?

const data = [
    {name:"Michael", age:22},
    {name:"Barry", age:25},
    {name:"Gary", age:82},
    {name:"Hope", age:63},
    {name:"John", age:43}
];

const RETIREMENT_AGE = 65;

for(i=0; i <data.length; i++){
    const person = data[i];
    if (person.age >= RETIREMENT_AGE){
        console.log("FOUND AT:", i, "NAME:", person.name);
        break
    }
}
console.log("LAST LOOKED AT: ", i)