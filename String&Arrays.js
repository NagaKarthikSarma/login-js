//String functions
let firstName= " Naga Karthik Sarma ";
let lastName= "Baruri";

console.log(firstName.concat(lastName));
console.log(firstName.charAt(5));
console.log(lastName.toUpperCase());
console.log(firstName.slice(0,5));
console.log(firstName.split(" "));
console.log(firstName.trim());
console.log(firstName.replace("ar", "arrr"));
console.log(`Hello Mr.${firstName}${lastName}, How are you ?`)

//Arrays
let names = ["karthik", "sarma", "naga", "saruu", "Baruri"]
console.log(names);
let x= ["karthik", "sarma", "naga", 10.44, 90]
console.log(x[0]);
x3=names+x;
console.log(x3);  // array is converted to string  with separated comma

ab=function sorting(a,b){
    if (a.length<b.length){
        return 1;
    }
    if (a.length == b.length) {
        return 0 ;
     }
     else {
     return -1;
     }
     
}

hello = names.sort(ab);
console.log(hello);

sos = names.sort();
console.log(sos)

x='23'
if (x==23){ //loose comparision -> internal type conversion
    console.log("helllo")
}

x=""
console.log(typeof x, x);
function myfunction(item){
    console.log(item);
  }
names.forEach(myfunction);

names.forEach((ab)=> {
  console.log(ab);

})


let user = {
    name: "karthik",
    age: 23,
    role: "pricing engineer",
   getWebDetails: function() {console.log(this) } , // this is for web console
   getConsole: function(){console.log(`hello ${user.age}, ${user.name}`)}
}

user.getWebDetails();
user.getConsole();

