
//Problem 1: 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // print: Tesla
console.log(otherRandomCar) // print: Mercedes

//Problem 2:
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // gives an error: RefrenceError name is not define
console.log(otherName); // if there is no error, print Elon

//Problem 3:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // print the password 12345
console.log(hashedPassword); //print undefined value

//Problem 4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // print false 2 != 5
console.log(first == third); // print true 2 == 2

//Problem 5:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // print 'value'
console.log(secondKey); // print [1,5,1,8,3,3]
console.log(secondKey[0]); // print 1
console.log(willThisWork); // print 5
