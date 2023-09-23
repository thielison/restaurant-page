import { createContactPage } from "./contact";
import "./style.css";

const createNav = () => {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const homeLink = document.createElement("a");
    homeLink.href = "/dist/index.html";
    homeLink.textContent = "HOME";
    homeLink.classList.add("nav-link");

    const menuLink = document.createElement("a");
    menuLink.textContent = "MENU";
    menuLink.classList.add("nav-link");

    const contactLink = document.createElement("a");
    contactLink.textContent = "CONTACT";
    contactLink.classList.add("nav-link");

    nav.append(homeLink, menuLink, contactLink);

    return nav;
};

const createFooter = () => {
    const footer = document.createElement("footer");

    const para = document.createElement("p");
    para.textContent = "Copyright © 2023 thielison";

    const link = document.createElement("a");
    link.href = "https://github.com/thielison";

    const img = document.createElement("img");
    // img.id = "github-symbol";
    // img.src = "images/github-mark.png";
    // img.alt = "github icon";

    link.appendChild(img);
    para.appendChild(link);

    footer.appendChild(para);

    return footer;
};

const createHeadline = () => {
    const main = document.createElement("main");
    main.classList.add("home-page");

    const para1 = document.createElement("p");
    para1.textContent = "Welcome";

    const h1 = document.createElement("h1");
    h1.textContent = "LA BRASILIANA";

    const para2 = document.createElement("p");
    para2.textContent = "Experience the finest pizza in your country, right here!";

    const button = document.createElement("button");
    button.textContent = "VIEW OUR MENU";
    button.setAttribute("type", "button");

    main.append(para1, h1, para2, button);

    return main;
};

const changePage = (navLink) => {
    document.getElementById("content").textContent = "";

    if (navLink.textContent === "HOME") {
        document.getElementById("content").append(createNav(), createHeadline(), createFooter());
    }
    if (navLink.textContent === "MENU") {
        console.log("MENU");
    }
    if (navLink.textContent === "CONTACT") {
        console.log("CONTACT");
        document.getElementById("content").append(createNav(), createContactPage(), createFooter());
    }
};

document.getElementById("content").append(createNav(), createHeadline(), createFooter()); // Initialize home page

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        changePage(e.target);
    });
});
