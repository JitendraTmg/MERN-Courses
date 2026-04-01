// const const1 = 10;
// const const2 = 20;

// const sum = const1 + const2;

// console.log("The sum is: " + sum);

// Arrays in JavaScript are used to store multiple values in a single variable. They can hold different types of data, including numbers, strings, and even other arrays. You can access elements in an array using their index, which starts at 0.

// var arr = ["python", "java", "c++"];
// console.log(arr[1]);

// Objects in JavaScript are collections of key-value pairs. They allow you to store and organize data in a structured way. You can access the values in an object using their keys.

// var obj = {
//     name: "Jin",
//     age: 22,
//     city: "Ktm"
// };

// obj.name = "Rin"; //override the value of name key
// // obj.email = "rin@example.com"; //add new key-value pair to the object
// console.log(obj);
// // console.log(obj.name);
// // console.log(obj["age"]);


// Logical operators in JavaScript are used to combine or manipulate boolean values. The main logical operators are AND (&&), OR (||), and NOT (!). They are commonly used in conditional statements to control the flow of the program based on certain conditions.

// var a = true;
// var b = false;

// console.log(a && b); // Output: false
// console.log(a || b); // Output: true
// console.log(!a);     // Output: false
// console.log(!b);     // Output: true


// Conditonal statements in JavaScript allow you to execute different blocks of code based on certain conditions. The most common conditional statements are if, else if, and else.


// var n = 20;

// if (n > 100) {
//     console.log("n is less than 100");
// }else if (n > 10) {
//     console.log("n is greater than 10");
// }else {
//     console.log("false value");
// }


// loop in JavaScript is used to repeat a block of code multiple times. The most common types of loops are for, while, and do-while loops.

var i = 1;
for (var i = 1; i <= 10; i++) {
    console.log("The value of i is: " + i);
}

var j = 10;
for (var j = 10; j > 0; j--) {
    console.log("The value of j is: " + j);
}

var k = 1;
while (k <= 10) {
    console.log("The value of k is: " + k);
    k++;
}

var m = 1;
do {
    console.log("The value of m is: " + m);
    m++;
} while (m <= 10);