// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => {console.log(json)});  // thid is modern way of fetching 

// let request = new XMLHttpRequest(); 
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// request.send();
// setTimeout(()=>{console.log(request.responseText)},1000)

let req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/todo/1');
req.send();

req.addEventListener('readystatechange',()=>{

    if(req.readyState ===4 && req.status === 200){
        console.log(req.responseText)
    }

})




