// DAY 17 JUNE


// const parent = document.getElementsByClassName("parent");

const button = document.getElementById("btn");

console.dir(button);

function tradationalFn() {
    console.log("Traditional function called");
}


const arrowFn = () => {
    console.log("Arrow function called");
};


tradationalFn();
arrowFn();


// Traditional FN EVENT CALL 
// button.addEventListener("click", function() {
//   console.log("Button clicked");
// });

// Arrow FN EVENT CALL
button.addEventListener("click", () => {
    console.log("Button clicked with arrow function");
    loops();
    printName();
    done();
});

const loops = () => {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

const printName = () => {
    console.log("My name is ......");
}


function done () {
    console.log("Done");
}


// parent.addEventListener("click", function(e) {
//   console.log("Parent clicked");
// });


const inputBox = document.getElementById("input");
const submitButton = document.getElementById("submitBtn");

const output = document.getElementById("output");


submitButton.addEventListener("click", (e) => {
    console.log("Input value:", inputBox.value);
    output.innerText = inputBox.value; 
})

console.dir(inputBox);

