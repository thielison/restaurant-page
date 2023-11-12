import { createNav, createHomePageHeadline, createFooter } from "./home";
import { createContactPage } from "./contact";
import { createMenuPage } from "./menu";
import "./style.css";

const changePage = (pageNavigationElement) => {
    const main = document.querySelector("main");
    main.textContent = "";
    main.className = "";

    if (pageNavigationElement.className === "home-link") {
        createHomePageHeadline();
        const homePageMenuButton = document.querySelector(".menu-button");
        homePageMenuButton.addEventListener("click", (e) => changePage(e.target));
    } else if (pageNavigationElement.className === "menu-link" || pageNavigationElement.className === "menu-button") {
        main.className = "menu-page";
        main.appendChild(createMenuPage());
    } else if (pageNavigationElement.className === "contact-link") {
        main.className = "contact-page";
        main.appendChild(createContactPage());
    }
};

document.getElementById("content").append(createNav(), createHomePageHeadline(), createFooter()); // Initialize home page

const navigationElementSelectors = [".home-link", ".menu-link", ".contact-link", ".menu-button"];

navigationElementSelectors.forEach((arrSelector) => {
    const navigationElement = document.querySelector(arrSelector);
    navigationElement.addEventListener("click", () => changePage(navigationElement));
});
