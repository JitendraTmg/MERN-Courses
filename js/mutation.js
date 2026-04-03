// Mutation


//mutable
var obj= {
    name : "Jin",
}
var newObj = obj;
// obj.email = "jin@example.com";
newObj.phone = 989443443;

console.log("obj:", obj);
console.log("newObj:", newObj);


//unmutable
var text1 = "Hello";
var text2 = text1;
text2 = "Hi";

console.log(text1); // Output: Hello
console.log(text2); // Output: Hi

//mutable example
var mailDetails = {
    name: "Jin",
    email: "jin@example.com",
    phone: 989443443
}
function sendMail(mailDetails){
    mailDetails.message ="hello msg";
    console.log("Mail sent to", mailDetails);
    }
sendMail(mailDetails);
console.log("mailDetails after sending mail:", mailDetails);
