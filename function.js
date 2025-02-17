// function addTwoNumbers(num1,num2){
//     console.log(num1+num2*num2); //paramater
// }
// addTwoNumbers(.142,6)  //argumant
function areaofCircle(pi,radius){
    return (pi*radius*2)
}
console.log(areaofCircle(3.142,16))

function celcius_farhenhiet(f){
    return 9/5*(f)+32
}
console.log(celcius_farhenhiet(5));

function loginUserMessage(username){
    if (username===undefined){
        console.log('PLEASE ENTER A USER NAME');
        return
    }
    console.log(`${username} just logged in`);

}
loginUserMessage(`EHTISHAM`);

    function checkEvenOdd(number) {
      if (number % 2 === 0) {
        // return "Even";
        console.log("even");
        
      } else {
        // return "odd";
        console.log("even");
        
      }
    }

    checkEvenOdd(64899)

// let x= checkEvenOdd(64899);
// console.log(x);

// console.log(checkEvenOdd(65684316465161653197));


