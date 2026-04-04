//string
let name = "John Doe";
let skills = "JavaScript, HTML, CSS";
console.log(name.toUpperCase()); // Output: JOHN DOE
console.log(name.toLowerCase()); // Output: john doe
console.log(name.length); // Output: 8
console.log(skills.split(", ")); // Output: ["JavaScript", "HTML", "CSS"]
console.log(name.includes("Doe")); // Output: true
console.log(name.replace("John", "Jane")); // Output: Jane Doe
console.log(name.slice(0, 4)); // Output: John

//task 
// input :
// test@gmail.com
// output:
// t...@gmail.com

function Email(email) {
    let [localPart, domain] = email.split("@");
    if (localPart.length > 1) {
        return localPart[0] + "..." + "@" + domain;
    }
    return email; // Return original email if local part is too short to mask
}
console.log(Email("test@gmail.com")); 


//number
let a = 100.232323;
console.log(a.toFixed(2)); // Output: 100.23
console.log(isNaN(a)); // Output: false




//object
let details =  {
    from : "test",
    to : "Jin",
    message : "Hello"
}
console.log(details);
console.log(Object.keys(details)); // Output: ["from", "to", "message"]
console.log(Object.values(details)); // Output: ["test", "Jin", "Hell0"]
console.log(details.hasOwnProperty("to")); // Output: true

var serialization = JSON.stringify(details);
console.log(serialization); // Output: {"from":"test","to":"Jin","message":"Hello"}

var deserialization = JSON.parse(serialization);
console.log(deserialization); // Output: { from: 'test', to: 'Jin', message: 'Hello' }

//for in
for (let i in details){
    console.log(i);
    console.log("value of",i, "is ;",details[i]);
}



