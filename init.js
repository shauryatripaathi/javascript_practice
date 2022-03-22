let container = document.getElementById("container");
let sideBar = document.createElement("div");
sideBar.id = "sideBar";
container.appendChild(sideBar);

let sideBarContents = document.createElement("ul");
sideBarContents.id = "sideBarContents";
sideBar.appendChild(sideBarContents);

let home_SideBarContent = document.createElement("li");
home_SideBarContent.innerText = "Home";
sideBarContents.appendChild(home_SideBarContent);

let contacts_SideBarContent = document.createElement("li");
contacts_SideBarContent.innerText = "contacts";
sideBarContents.appendChild(contacts_SideBarContent);

let about_SideBarContent = document.createElement("li");
about_SideBarContent.innerText = "About";
sideBarContents.appendChild(about_SideBarContent);