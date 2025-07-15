// function buyproduct(product_Name, cb){
//     //do some asynchronous operation 
//     setTimeout(()=>{
//         //jab saare operations ho jayenge cb() call ho jayega
//         console.log("ALL the i/o operations completed nd order details are printed in user data")
//         cb();
//     },0)
// }
// buyproduct("Iphone 16", function(){
//     console.log("product is purchased")
// })
let product=[{
    name:"Samsung",
    amount:70000,
    quantity: 10
},
{
    name: "Iphone 16",
    amount: 10000,
    quantity:0
}
]
function buyproduct(product_Name,cb){
    let isProduct= product.filter((p)=>p.name==product_Name)[0];
    if(!isProduct){
       return cb("product is not available",null)
    }

    cb(null, isProduct.amount);// pehla null isliye hai kyiunki agar koi error naiii aya toh hume first argument mai kuch toh likhna padega so we wrote null
}
let availableamount=50000
function deductbankamount(amount, cb){
 // do some transactions 
 if(amount>availableamount){
         return cb("bank balance is low", null)
 }
 else{
    availableamount-=amount;
    console.log(availableamount);
    cb(null, "amount deducted")

    
 }

}
buyproduct("Iphone 16", function(err,amount){
    if (err) return console.log(err);
console.log(amount);
deductbankamount(amount, function(err,message){
if (err) return console.log(err)
    console.log(message);
})
})
//const fs= require("fs");
//fs.readFile("filepath", "utf-8", function(Err, data))
//ek naya array banta haii usme saare elements aa jaate hai jo filter condition satisfy karte hai
// in call back function - do dikkat call back helll aur hamare hath me control nahi haiii , uske paas hai jisne banaya haiiii so  now weee will be using promise!!!
// promise is an object which represents eventual completion or failure of an asynchronous operation