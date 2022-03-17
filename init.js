let container = document.getElementById("container");
let sideBar = document.createElement("div")
sideBar.id = "sideBar";
container.appendChild(sideBar);

let sideBar_contents = document.createElement("ul");
sideBar_contents.id = "sideBar_contents";
sideBar.appendChild(sideBar_contents)

let home_SideBar_Btn = document.createElement("li");
home_SideBar_Btn.innerText = "Home";
sideBar_contents.appendChild(home_SideBar_Btn);

let about_SideBar_Btn = document.createElement("li");
about_SideBar_Btn.innerText = "About";
sideBar_contents.appendChild(about_SideBar_Btn);

let contact_SideBar_Btn = document.createElement("li");
contact_SideBar_Btn.innerText = "Contacts";
sideBar_contents.appendChild(contact_SideBar_Btn);

let home_DropBox = document.createElement("div");
home_DropBox.id = "home_DropBox";

function HandleOnHomeBtn(){
   home_SideBar_Btn .appendChild(home_DropBox);
    
}
home_SideBar_Btn.addEventListener("click",HandleOnHomeBtn)


