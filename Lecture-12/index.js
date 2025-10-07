//js for frontend

//Part 1
let btn = document.querySelector('#btn')
let box = document.querySelector(".box");

let colors = ["blue", "green", "pink", "red", "purple", "gray", "yellow", "orange", "cyan", "lavender"]

btn.onclick = () =>{
    let idx = Math.floor(Math.random()*10);
    box.style.backgroundColor = colors[idx];
}

//Part 2
let generate = document.querySelector('#generate')
let  colorBox= document.querySelector("#color-box");
let stop = document.querySelector("#stop");
function randomColor(){
    let idx = Math.floor(Math.random()*10);;
    return colors[idx];
}
generate.onclick = () =>{

    intervalId = setInterval(()=>{
        let color = randomColor();
        colorBox.style.backgroundColor = color;
    }, 500)
}
stop.onclick = () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
}