// classic functions
function greet(a,b){
    return a+b;
}
const greeting = greet(1,2);
console.log(greeting);


// passing functions as arguments
function handleTimeout(){
    console.log('timeout');
}
const handleTimeout2 = () => {
    console.log('timeout2');
}
setTimeout(handleTimeout);
setTimeout(handleTimeout2);

function greeter(greetFn){
    greetFn();
}

greeter(() => console.log("HI!"));


function init(){
    function greetInside(){
        console.log("Hi");
    }

    greetInside();
}

init();
// not in scope
// greetInside();