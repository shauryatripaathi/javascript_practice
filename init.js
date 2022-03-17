let container = document.getElementById("container");
let btn = document.getElementById("btn");

function HandleOnClick(){
    let x = Math.floor(Math.random()*256)
    let y = Math.floor(Math.random()*256)
    let z = Math.floor(Math.random()*256)
    document.body.style.backgroundColor = `rgb(${x} ${y} ${z})`
    console.log(document.body.style.backgroundColor)
    console.log(x);
}
btn.addEventListener("click",HandleOnClick)
