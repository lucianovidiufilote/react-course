const [firstName, lastName] = ['A', 'B', 'C'];
console.log(firstName);
console.log(lastName);

const {name, age: ageAlias} = {
    name: 'John',
    age: 32,
}

console.log(name, ageAlias);

function storeA({id, currency}){
    console.log(id, name)
}
// same as
function storeB(order){
    console.log(order.id, order.name)
}

storeA({id: 1, currency: 'A'})
const order = {
    id: 1,
    currency: 'A',
}
storeB(order)