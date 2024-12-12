
        let x = 10;
        var y = "Hello"
        const z = 20.2;
        
        const arr = [1, "Test" , 3,4,5];
        const car = [0]
        car[0] = "BMW";
        car[1] = "Audi";
        const fruit = new Array("Apple", "Banana", "Orange")
        const profile = [[1,2,3], "name", "age"];

        console.log(profile[0][1]);
        console.log(fruit);
        
    //object
    const person = {
        fristName: "John",
        lastName: "Doe",
        age: 50,
        eyeColer: ["blue", "black"],
        fullname: function(){
            return this.fristName + " " + this.lastName
        }
    };
    person.adress = {
            street: "5th Avenue",
            city: "New York"
        };

        console.log(person.fullname());
//function
function sum(a,b){
    return a + b;
}

function sub(a,b){
    return (a - b);
}
const mul= (a,b) => {
    return a * b;
}

const div = (a,b)=> a/b;

const result = sum(10,20);
console.log(result);