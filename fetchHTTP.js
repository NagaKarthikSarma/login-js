const info = async() =>{
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = response.json();
return data;
};

info().then(data => {console.log(data)}) 

console.log("Hello world");

const res = fetch('https://jsonplaceholder.typicode.com/todos/1')

res.then((response)=>{
    response.json().then((data)=>{console.log(data)})
})

let infos = fetch("https://jsonplaceholder.typicode.com/todos/10")

infos.then((response)=>{  // using the then we are making the network call synchronous
    
    console.log(response.json().then((data)=>{
        console.log(data)
    }));
}).catch((err) =>{
    console.log("error: ", err)
})


