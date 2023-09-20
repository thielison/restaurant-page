import "./style.css";

const createNav = () => {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const homeDiv = document.createElement("div");
    const menuDiv = document.createElement("div");
    const contactDiv = document.createElement("div");
    homeDiv.textContent = "HOME";
    menuDiv.textContent = "MENU";
    contactDiv.textContent = "CONTACT";

    nav.append(homeDiv, menuDiv, contactDiv);

    return nav;
};

const createHeadline = () => {
    const headLine = document.createElement("section");
    headLine.classList.add("middle-content");

    const para1 = document.createElement("p");
    const h1 = document.createElement("h1");
    const para2 = document.createElement("p");
    para1.textContent = "Welcome";
    h1.textContent = "LA BRASILIANA";
    para2.textContent = "Some copy text goes here";

    headLine.append(para1, h1, para2);

    return headLine;
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

document.getElementById("content").append(createNav(), createHeadline(), createFooter());
