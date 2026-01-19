// arrow functions
const func = () => {
    console.log("hello world");
}


// TIPS

// 1) Omitting parameter list parentheses
// If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.

const one = (username) => {
    console.log(username);
}
const two = username => {
    console.log(username);
}

// 2) Omitting function body curly braces
// If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

const three = number => {
    return number * 3;
}
const four = number => number * 4;

// 3) Special case: Just returning an object
const five = () => ({name: "John"});