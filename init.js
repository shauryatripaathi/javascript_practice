let container = document.getElementById("container");
// let sideBar = document.createElement("div");
// sideBar.id = "sideBar";
// container.appendChild(sideBar);

// let sideBarContents = document.createElement("ul");
// sideBarContents.id = "sideBarContents";
// sideBar.appendChild(sideBarContents);

// let home_SideBarContent = document.createElement("li");
// home_SideBarContent.innerText = "Home";
// sideBarContents.appendChild(home_SideBarContent);

// let contacts_SideBarContent = document.createElement("li");
// contacts_SideBarContent.innerText = "contacts";
// sideBarContents.appendChild(contacts_SideBarContent);

// let about_SideBarContent = document.createElement("li");
// about_SideBarContent.innerText = "About";
// sideBarContents.appendChild(about_SideBarContent);


let navBar = document.createElement("nav");
navBar.className = "navBar";
container.appendChild(navBar)

let home = document.createElement('a');
home.id = "home"
home.appendChild(document.createTextNode('HOME'))
home.setAttribute('href','#home')
navBar.appendChild(home);

let contact = document.createElement('a');
contact.id = "contact";
contact.setAttribute('href','#contact');
contact.appendChild(document.createTextNode('CONTACTS'))
navBar.appendChild(contact);

let about = document.createElement('a')
about.id = "about";
about.setAttribute('href','#about');
about.appendChild(document.createTextNode('ABOUT'))
navBar.appendChild(about)

let dropBox = document.createElement('div');
dropBox.id = 'dropbox'
dropBox.style.display = 'none'
container.appendChild(dropBox)

function handleOnHomeBtn(){
    dropBox.style.display = 'block'
}
home.addEventListener("click",handleOnHomeBtn);