let person = {
    name : "jordrn",
    age : "9",
    city : "karachi",
}
console.log(person);
for (let key in person){
    console.log(`the ${key} is ${person[key]}`);
    
}
console.log;
let parsonStr = JSON.stringify(person)
console.log(parsonStr);

let person1 = JSON.parse(parsonStr)
    console.log(person1);
    



