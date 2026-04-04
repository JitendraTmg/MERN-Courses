//Methods in Array

var emailList = ["test@gmail.com", "user@yahoo.com", "admin@hotmail.com", "guest@gmail.com", "owner@gmail.com", "test@gmail.com"];
console.log(emailList.length); // Output: 6
console.log(emailList[0]); // Output: "test@gmail.com"
console.log(emailList.indexOf("tests@gmail.com")); // Output: -1 (not found)
console.log(emailList.indexOf("test@gamil.com")); // Output: 0 //search from the first element
console.log(emailList.lastIndexOfindexOf("test@gmail.com")); // Output: 5 //search from the last element
console.log(emailList.includes("test@gmail.com")); // Output: true

//adding elememt in array
//in first position
emailList.unshift("new@gmail.com");
console.log(emailList); // Output: ["new@gmail.com", "test@gmail.com", "user@yahoo.com", "admin@hotmail.com", "guest@gmail.com", "owner@gmail.com", "test@gmail.com"]

//in last position
emailList.push("last@gmail.com");
console.log(emailList); // Output: ["new@gmail.com", "test@gmail.com", "user@yahoo.com", "admin@hotmail.com", "guest@gmail.com", "owner@gmail.com", "test@gmail.com", "last@gmail.com"]

//removing element from array
//from first position
emailList.shift();
console.log(emailList); // Output: ["test@gmail.com", "user@yahoo.com", "admin@hotmail.com", "guest@gmail.com", "owner@gmail.com", "test@gmail.com", "last@gmail.com"]

//from last position
emailList.pop();
console.log(emailList); // Output: ["test@gmail.com", "user@yahoo.com", "admin@hotmail.com", "guest@gmail.com", "owner@gmail.com", "test@gmail.com"]

let result = emailList.slice(1, 4);
console.log(result); // Output: ["user@yahoo.com", "admin@hotmail.com", "guest@gmail.com"]

emailList.splice(2, 1, "updated@gmail.com");
console.log(emailList); // Output: ["test@gmail.com", "user@yahoo.com", "updated@gmail.com", "guest@gmail.com", "owner@gmail.com", "test@gmail.com"]

