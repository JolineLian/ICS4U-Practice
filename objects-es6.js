let person = {
    name : "steve",
    age : 30,
    isStudent : false
}

console.log(person.name);
console.log(person['age']);

const key = 'age';
console.log(person.key);    // yields undefined
console.log(person[key]);   // yields 30
console.log(person['key']); // yields undefined

person.city = 'North York';
console.log(person.city);

let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract : function(a, b) {
        return a - b;
    }
}

console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(5, 6));

let user = {
    name: "Alice",
    greet() {
        console.log(`This user is ${this.name}`);
    }
};
user.greet();

const obj = {
    a: 6,
    b: 'hello',
    c: function() {
        console.log(`${this.a}`);
    }
}

obj.c();

let {a, b, c} = obj;

console.log(b);
c();    // does not have access to a when not part of obj
obj.c();

let test = obj;
test.c();   // works because you are not destructuring it

for (const key in obj) {
    console.log(obj[key]);
}
