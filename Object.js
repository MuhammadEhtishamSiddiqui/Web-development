let name = "David"
const contact = {
    phonenumber:'555-0981',
    email: 'alex@gmail.com',
    name: 'some name',
    address:{
        city: 'karachi',
        province: 'sindh',
        country: 'Pakistan',
    },
    location:{
        longitude:'979thkv',
        latitude:'ih257',

    },
    greet(){
        return `hellow ${this.name},my email is ${this.name}`
    }
};
console.log(contact.location);
contact:LinkedIn = 'dav123';
console.log(contact);
console.log(contact.greet())

delete contact.name;
console.log(contact);
const object1 = {
    message: 'hellow'
}
const object2=object1;
const object3={
    message: 'hellow'
}
console.log(object1===object2); //
console.log(object1===object3); //

