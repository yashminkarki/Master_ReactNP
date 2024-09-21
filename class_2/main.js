// const user = {
//     name: "ram",
//     age: 12,
//     getLocation: function () {
//         console.log("location is USA");
//         console.log(this);
//     },
// };


user.getLocation();

this.age;

user.getLocation().name;

function getName(email, age){
    console.log(arguments);
}

getName("ab@gmail.com", 29);




const getName = () =>{
    console.log(arguments);
}   // arrow functions doesnt support arguments


const user = {
    name: "ram",
    age: 12,
    getLocation: () => {
        console.log(this); // if used like it, then this returns the window not the object

    }
};


//implicit return
const getLocation = () => ({name: "ss"});
//OR

const getLocation2 = () => {
    return {name: "ss"};
};

const isLoggedIn = () => false;

const name1 = "shimon";
const location1 = 'nepal "island"';
const adress = `bsjcjhs`;

const sentence = `my name is ${name1}`;

const arr1 = [2,4,6,8,10];

const odd_numbers = [1,3,5,7,9];
const even_numbers = [2,4,6,8,10];


//spread operator in array
const allNumbers = [...even_numbers, ...odd_numbers];


//spread operator in object
const location2 = {
    city: "irving",
    state: "texas",
    country: "US",
    region: "North America",
};

const user2 = {
    name: "yk",
    email: " yk@gmail.com"

};
const completeUser = {...user2, ...location2};

//rest operator in destructuring

const {city, state, ...rest} = location2;


function addignOne(numbers){

let result = [];

for(let i=0; i< numbers.length ; i++){
    let plusOne = numbers[i] + 1;
    result = [...result, plusOne];
}

return result;

}
const number3= [1,2,3,4,5,6,7,8,9,10];

//higher order function

//immutable functions - map, filter, find
//map
const newNumbers = number3.map((item) => item + 1);

//filter
const evenNumbers = number3.filter((item) => item % 2 === 0 );
const oddNumbers = number3.filter((item) => item % 2 !== 0 );

//find
//array of user object with name and age
const users = [
    { name: "ram", age: 12 },
    {name: "harry", age: 30},
    {name: "yash", age: 26},
];

const foundUser = users.find((item) => item.name === 'ram');


//mutable functions
//push, pop

const arr = [2,4,6]
arr.push(10);
arr.push(10, 13);

//pop
arr.pop();  //removes 13

//shift
arr.shift(); //removes first element from array

const a = name1 + " is from " + location;

const b = `${name} is from ${location}`;
