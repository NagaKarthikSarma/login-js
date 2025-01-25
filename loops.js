

let year = 2001

if (year ==200){
    console.log(year)
}

else{
    console.log("this is year: ",year)
}

if (year == 2001){

}


// Install the library first (only needed once)
// npm install prompt-sync


// var names = prompt("What is your name?");
// var num = prompt("What is your favorite number? ");

// console.log("Hello " + names + "!");
// console.log(num + "?! That's my favorite number too!");

// // Prints out the variable type
// console.log("Name is a " + typeof names);
// console.log("Num is a " + typeof num);

const grade = "karthik"
switch(grade){
    case "karthik":
        console.log("hello ")
        break;
    case "sarma" :
        console.log("hii")
        break;
    default:
        console.log("default")
}

loop = ["karthik", "naga", "sarma","baruri"]

console.log(loop)

custom = function Customs(a,b){
    if (a.length<b.length){
    return -1;
    }
    if (a.length == b.length) { 
        return 0 ;
     }
     else {
     return 1;
    }
}

console.log(loop.sort(custom));

// function Customs(a,b){
//     if (a.length<b.length){
//     return -1;
//     }
//     if (a.length == b.length) { 
//         return 0 ;
//      }
//      else {
//      return 1;
//     }
// }

// console.log(loop.sort(Customs));

// let names = prompt("enter your name: ")
// console.log(names)

loop.forEach((element) => {
    console.log(element)
});

let user = {
    names: "Naga Karthik Sarma",
    age: 23,
    employeeid: "34gtttyyhy",
    getdetails: function getall() {
        console.log(`hello Mr.${user.names}, How are you`);
    }
}

user.getdetails();