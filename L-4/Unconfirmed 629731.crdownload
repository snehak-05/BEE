// let p= new Promise((resolve, reject)=>{
//   resolve("wada pura kiya")
// })
// //console.log(p);
// p.then(()=>{
// console.log(data)
// })
// .catch((err)=>{
// console.log(err)
// })
/* three states of promise - 
1. pending
2. fulfilled par .then() chalta hai
3. rejected  par .catch() chalega*/
let product=[{
    name:"Samsung",
    amount:70000,
    quantity: 10
},
{
    name: "Iphone 16",
    amount: 50000,
    quantity:0
}
]
function buyproduct(product_Name){
 return  new Promise((resolve,reject)=>{
    let isProduct= product.filter((p)=>p.name==product_Name)[0];
  if(!isProduct){
       return reject("product is not available")
    }
  
    resolve(isProduct.amount)
    })
}
buyproduct("Iphone 16").then((amount)=>{
  console.log(amount)
})
.catch((err)=>{
  console.log(err)
})