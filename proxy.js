// let number = [1,2,3]
// number = new Proxy(number,{
//     get(target,prop){
//         if(prop in target){
//             return target[prop]
//         }
//         else{
//             return 0;
//         }
//     }
// })
// console.log(number[0])

// function addNode() {
//     var newP = document.createElement("p");
//     var textNode = document.createTextNode(" This is a new text node");
//     newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP);
// } 

// parseInt ("4F", 16);
// console.log(parseInt())


// console.log('I m a \"good\" boy')


// function greet(message) {
//     console.log(message);
// }
// function greeter(name, age) {

//     return name + " says howdy!! He is " + age + " years old";
// }
// // Generate the message
// var message = greeter("James", 23);
// // Pass it explicitly to greet
// greet(message);




// This function can be better represented by using closures
// function greeter(name, age) {
//     var message = name + " says howdy!! He is " + age + " years old";
//     return function greet() {
//         console.log(message);
//     };
// }
// // Generate the closure
// var JamesGreeter = greeter("James", 23);
// // Use the closure
// JamesGreeter();


// var anon = function() {
//     alert('I am anonymous');
// };
// anon();


// console.log(myName)
// let myName ="Ali";

//  document.write(escape("Hello? How are you!"));
// console.log (doc)