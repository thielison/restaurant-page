import { createContactPage } from "./contact";
import { createMenuPage } from "./menu";
import githubIcon from "./images/github-icon.png";
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

    const img = new Image();
    img.src = githubIcon;
    img.id = "github-icon";

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
    button.classList.add("menu-button");
    button.setAttribute("type", "button");
    button.addEventListener("click", (e) => changePage(e.target));

    main.append(para1, h1, para2, button);

    return main;
};

const changePage = (pageNavigationElement) => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.className = "";

    if (pageNavigationElement.className === "home-link") {
        createHomePageHeadline();
    } else if (pageNavigationElement.className === "menu-link" || pageNavigationElement.className === "menu-button") {
        main.className = "menu-page";
        main.appendChild(createMenuPage());
    } else if (pageNavigationElement.className === "contact-link") {
        main.className = "contact-page";
        main.appendChild(createContactPage());
    }
};

document.getElementById("content").append(createNav(), createHomePageHeadline(), createFooter()); // Initialize home page

document.querySelector(".home-link").addEventListener("click", (e) => changePage(e.target));
document.querySelector(".menu-link").addEventListener("click", (e) => changePage(e.target));
document.querySelector(".contact-link").addEventListener("click", (e) => changePage(e.target));
