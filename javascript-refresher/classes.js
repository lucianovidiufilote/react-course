class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("hello world");
    }
}

const user = new User("Test", 1);
user.greet();