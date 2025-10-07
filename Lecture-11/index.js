 
 /*
 // 1. Using ID
let el1 = document.getElementById("heading");
console.log("Accessed by ID:", el1);

// 2. Using class
let el2 = document.getElementsByClassName("item");
console.log("Accessed by class (first match):", el2[0]);

// 3. Using tag name
let el3 = document.getElementsByTagName("p");
console.log("Accessed by tag (first <p>):", el3[0]);

// 4. Using querySelector (returns first matching element)
let el4 = document.querySelector(".item");
console.log("Using querySelector (class):", el4);

// 5. Using querySelectorAll (returns all matching elements as NodeList)
let el5 = document.querySelectorAll("p");
console.log("Using querySelectorAll (all <p>):", el5);
*/
/*
innerText
innerHtml
textContent
*/
/*
let data=e14.innerText;
console.log(data);
e14.innerText="changed using js"
let data2=useLayoutEffect.innerHTML;
console.log(data2);
let data3=ui.innerText;
let data4=ui.textContent;
console.log(data3);
console.log(data4);
//ul.innerHTML= <li class="item">item 4</li>
//<li class="item">item 5</li>
//<li class="item">item 6</li>
*/
//accesiing 1st elemnt
//1. using id
// 2. using class
//3. using tag
//4. queryselector/queyseclectorall
// let el1= document.getElementById("heading")
// console.log(el1);
// let el2= document.getElementsByClassName("item");
// console.log(el2[0]);
// let el3=document.getElementsByTagName("p");
// console.log(el3[0]);

let el4= document.querySelector("p");
let el5= document.querySelector(".item");
let el6= document.querySelectorAll(".item");
let ul= document.querySelector("ul");
console.log(el4);
console.log(el5);
console.log(el6);
let data=el4.innerText;
console.log(data);
el4.innerText="changed using js";
let data2=ul.innerHTML;
let data3= ul.innerText;
console.log(data2);
console.log(data3);
ul.innerHTML=`<li class="item"> 2nd </li>
<li class="item"> 3rd </li>
<li class="item"> 4th </li>`
/* 
getAttribute
setAttribute
classList
*/