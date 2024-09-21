const value = false || "swikar";

let isLoggedIn = false;
const value2 = isLoggedIn || "swikar";
//returns false

//null coalescing operator
let isLoggedIn1 = null;
const value22 = isLoggedIn1 || "swikar";
//returns second operand

//Promise
let hasError = true

const promise = new Promise((resolve, reject) => {

    if(hasError){
        reject({message: "Error ocurred"})
    }
    else{
        resolve({
            message: "data fetched.",
            user: {
                id: 1,
                name: "swikar"
            },
        })
    }
});

promise.then((res) =>{ 
    console.log(res);
}).catch((error) => {
        console.log( {error} );
}). finally(() => {console.log("finally")});

// async code non-blocking code
async function main() {

    try{
        const res = await promise;
        console.log( {res});
       
    }catch(err){
        console.log("error is ", err);
    }finally{
        console.log("finally");
    }
    
}

main();


//set timeout

// setTimeout(() => { 
//     console.log("Hello");
// }, 5000);


setTimeout(toRunLater, 5000);

function toRunLater() { 

    console.log("hello");
    console.log("hi");
}


//sleep

function sleep(ms) {
    return new Promise((resolve) => {

        setTimeout(resolve, ms);

    });
     
}

async function sleepChecker() {

    console.log("before sleep");
    await sleep(2000);
    console.log("after sleep");


}


// const el = document.getElementById("main_heading");

// console.log( {el} );

// //el.innerText = "hello";

// el.innerHTML = `<p>heading is s</p>`

const button = document.getElementById("click_me")

button?.addEventListener("click", handleButtonClick);

function handleButtonClick() {
console.log("button clicked")
}


//Strign functions - split , join


//SPLIT
const values = "snow, ram, hari"

const valuesArray = values.split(", ");


//join
const people = ["ram" , "shyam", "hari"];
people.join(", ")