function firstFunction() {
    console.log("Hello!");
}

console.log(firstFunction);

function myFunction() {
    console.log( arguments );
};

myFunction( 3, true, "My string",[1,2,3,3,4,5,5,5], {name: "Igor", age: 23});

let thisIsaFunc = function () {
    console.log('Function expression');
}

thisIsaFunc();