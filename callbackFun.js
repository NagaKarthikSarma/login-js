const displayData = (call)=> {

let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/10');
request.send();

request.addEventListener('readystatechange',()=>{

    if (request.status===200 && request.readyState===4){
        
        call(undefined, request.responseText)
    }
    else if (request.readyState===4){
         call("error while calling the API", undefined)
    }
    

})

}
displayData((err,data)=>{

    if (err){
        console.log(err)
    }
    else{
        console.log(data)
    }

});


function a(call) {
    console.log("Hello " + call())
}

function b(){
    return  "world";
}

a(b); 
// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback(); 
//   }
  
//   function afterGreeting() {
//     console.log("Greeting completed.");
//   }
  
//   greet("World", afterGreeting);