// let user = {
//     names: "Naga Karthik Sarma", // it is known as property 
//     age: 23,
//     employeeid: "34gtttyyhy",
//     getdetails: function getall() {  // it is known as method function inside a literal is method
//         console.log(`hello Mr.${user.names}, How are you`);
//     }
// }

// user.getdetails();

// let property = 'names'

// console.log(user[property]);

let element = document.querySelector("body > p");

console.log("element: ", element)



let select = document.querySelector("b").querySelector("para")

console.log("select :", select);
let all = document.querySelectorAll('p')
console.log('all p tags: ', all[0])

let ele = document.getElementsByTagName("div")

console.log(ele[1]);

let clname = document.getElementsByClassName("para") // this htmlcollection we cannot iterate
console.log(clname);

let  idname = document.getElementById('t')
console.log(idname);

let textchange = document.querySelector('p')
console.log(textchange)
// in order to get the innertext we can use
console.log(textchange.innerText)

textchange.innerText = "Hello boss!"
console.log (textchange)
// in order to modify the innertext in html tags we need to use the .innerHTML

textchange.innerHTML+="testing"
console.log(textchange);
