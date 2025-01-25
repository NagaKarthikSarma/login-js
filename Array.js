// let arr = [1,2,3,4,5,6,"7",8,9]
// console.log(arr)

// let evenarr= arr.filter(( ele)=> {

// return ele%2==0
// })

// console.log(evenarr)

// let oddarr = arr.filter((ele) =>{

//     return ele%2!=0
// })
// console.log(oddarr)

// let numbers =[
//     {number: 11,type:"odd"},
//     {number: 4,type:"even"},
//     {number: 9,type:"odd"},
//     {number: 16,type:"even"},
//     {number: 8,type:"even"},
//     {number: 1,type:"odd"}
// ]

// console.log(numbers)

// even_number = numbers.filter((num)=> num.type=="even")
// console.log(even_number)
// ''
// odd_number = numbers.filter((num)=> num.type=="odd")
// console.log(odd_number)

// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// numbers.forEach(element => {
//     console.log(element);
// });

let mapnumbers =[
    {number: 11,type:"odd"},
    {number: 4,type:"even"},
    {number: 9,type:"odd"},
    {number: 16,type:"even"},
    {number: 8,type:"even"},
    {number: 1,type:"odd"}
]

let sq_numbers = mapnumbers.map((a)=>{
    return (a.number*a.number); }
)
console.log(sq_numbers)

let nm = sq_numbers.reduce((counter,current)=>{

  if(current % 2 ==0){
    counter =counter+1;
   // console.log(counter)
  }
  return counter
  

},0); // need to give the initial value

console.log(nm)

mapnumbers =[
    {number: 11,type:"odd"},
    {number: 4,type:"even"},
    {number: 9,type:"odd"},
    {number: 16,type:"even"},
    {number: 8,type:"even"},
    {number: 1,type:"odd"},
    {number: 7,type:"odd"}
]

let result2= mapnumbers.reduce((counter,current)=>{

if (current.type=="odd"){
    counter +=1
}

return counter

},0) // need to give the initial value as 0 

console.log(result2)

let numbers = [0,15,4,35,67,89]

let result3 = numbers.find((ele)=>{ // we need to give the logic

    if (ele>=10){
        return ele;
    }
})

console.log(result3);

console.log(numbers)
custom = function cust(a,b){
    if (a<b){
        return  -1;
    }
    if (a==b){
        return 0;
    }
    else{
        return 1;
    }
} 

console.log(numbers.sort(custom))

//chaining the methods
let names =["karthik","sarma","naga","baruri","bnks"]

let filternames = names.filter(nam=>nam !="bnks")
                       .map(nam=>nam.toUpperCase())
                       .sort(custom)
                    

console.log(filternames);

let second= filternames.reverse();

console.log(second);
