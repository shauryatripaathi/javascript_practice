let container = document.getElementById("container");
let btn = document.createElement("button");
btn.innerHTML = "Click here";
container.appendChild(btn);

let popUpBox = document.createElement("div");
popUpBox.id = "popUpBox";
container.appendChild(popUpBox);
popUpBox.style.display = "none"

let crossBtn = document.createElement("button");
crossBtn.id = "crossBtn";
crossBtn.innerText = "X";
popUpBox.appendChild(crossBtn);

function handleOnButton(){
    btn.style.display = "none";
    popUpBox.style.display = "block";
}
btn.addEventListener("click",handleOnButton)

function handleOnCrossBtn(){
    btn.style.display = "block";
    popUpBox.style.display = "none";
}
crossBtn.addEventListener("click",handleOnCrossBtn);