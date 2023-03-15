// let i =1; i<20; i+= 7
// console.log(i)

// question 3
let science="physics, chemistry, biology, technicaldrawing"
let social="accounting, commerce, marketing, geography"
let art="government, economics,literature, history"
let generalstudies=" English, Mathematics"
if(art=== "government, economics,literature, history") {
    console.log("government, economics,literature, history" +""+generalstudies)
} else{
    "generalstudies"
}
if(science==="government, economics,literature, history"){
    console.log("government, economics,literature, history")
} else {
    console.log("generalstudies:"+ "" +generalstudies)
}
if(social==="government, economics,literature, history"){
    console.log("government, economics,literature, history")
} else {
    console.log("generalstudies:"+ "" +generalstudies)
}

//question 5
const num= 80;
const nearestPowerofTwo =(num)=>{
    //dealing only with non-negative numbers
    if(num<0){
    num*=-1;
}
let base=1;
while(base<num){
    if(num-base<Math.floor(base/2)){
        return base;
    };
    base*=2
;}
return base;
}
const pwr =nearestPowerofTwo(num)
console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num )
// if(40 ** 32){
//     console.log('the Number 32 is the power of 2 nearest to 40' )
// } 
// let num=40**32
// if(num =40**32){
// console.log(num)
// }l