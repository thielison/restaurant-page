import { createContactPage } from "./contact";
import "./style.css";

const main = document.createElement("main");

const createNav = () => {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const homeLink = document.createElement("a");
    homeLink.textContent = "HOME";
    homeLink.classList.add("home-link");

    const menuLink = document.createElement("a");
    menuLink.textContent = "MENU";
    menuLink.classList.add("menu-link");

    const contactLink = document.createElement("a");
    contactLink.textContent = "CONTACT";
    contactLink.classList.add("contact-link");

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

const createHomePageHeadline = () => {
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
    const main = document.querySelector("main");
    main.textContent = "";
    main.className = "";

    if (navLink.className === "home-link") {
        main.className = "home-page";
        main.appendChild(createHomePageHeadline());
    } else if (navLink.className === "menu-link") {
        main.className = "menu-page";
        main.appendChild(createMenuPage());
        return;
    } else if (navLink.className === "contact-link") {
        main.className = "contact-page";
        main.appendChild(createContactPage());
    }
};

document.getElementById("content").append(createNav(), createHomePageHeadline(), createFooter()); // Initialize home page

document.querySelector(".home-link").addEventListener("click", (e) => changePage(e.target));
document.querySelector(".menu-link").addEventListener("click", (e) => changePage(e.target));
document.querySelector(".contact-link").addEventListener("click", (e) => changePage(e.target));
