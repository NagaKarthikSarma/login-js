const demo =() => {

    return  new Promise((resolve, reject) =>{  // resolve () called -> when promise is successfull
                                                // reject () called -> when promise was failed
    resolve("Hello Promise!");
    reject("rejected")
    });
}
demo().then((data)=>{

    console.log(data); //Hello promise
}, (err)=>{
    console.log("karthik: ",err);
}

);

demo().then((data)=>{

    console.log(" output 2: " +data); //Hello promise
}).catch(err =>{

    console.error("errror: ", err)
});

demo();