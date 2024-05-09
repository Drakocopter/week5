let productCodes = {
    aaa: "Apple",
    bbb: "Banana",
    ccc: "Cherry"
};
productCodes["ggg"] = "Grape";


let key = "ggg";
let value = productCodes[key]
console.log(value);

console.log(productCodes.ccc)

const keyList = Object.keys(productCodes);
console.log(keyList);
for(let i=0;i<keyList.length;i++){
    const key = keyList[i];
    const value = productCodes[key];
    console.log(i, key, value)
}

const myself = {firstName: "Yishmael", lastName: "Bewry"};
myself.age = 56;

function displayPerson(p) {
    return `
    ${p.firstName}, ${p.lastName}, ${p.age}`
}

console.log(displayPerson(myself));


function printEmployeeAndPay(emp) {
    console.log("Name: " + emp.name);
    console.log("Pay: " + emp.payRate);
   }
   let emp1 = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate: 38.46
    };
   let emp2 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 43.27
    };
   printEmployeeAndPay(emp1);
   printEmployeeAndPay(emp2);