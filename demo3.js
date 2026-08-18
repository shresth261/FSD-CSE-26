const num = [1, 2, 3, 4, 5];
// const a= num[0];
// const b= num[1];
// const c= num[2];
// const d= num[3];
// const e= num[4];

const[a, b, c, d, e] = num;

console.log("a=", a);
console.log("b=", b);
console.log("c=", c);
console.log("d=", d);
console.log("e=", e);

// object destructuring
const student = {
    name : "shrestrh",
    age : 22,
    city : "Bangalore"
}

const {name, age, city} = student;
console.log(`my name is ${name} this is my old name`);
console.log("age=", age);
console.log("city=", city);

