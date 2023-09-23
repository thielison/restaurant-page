import Image from "./images/maps-address.png";

const createContactPage = () => {
    const main = document.createElement("main");
    main.classList.add("contact-page");

    const addressFieldDiv = document.createElement("div");
    addressFieldDiv.classList.add("address-field");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Address";

    const para = document.createElement("p");
    para.textContent = `Lorem Street, 77, Ipsum City - RS, CEP 911911, Brasil`;

    const mapsImg = document.createElement("img");
    mapsImg.src = Image;
    mapsImg.alt = "Google Maps Image";
    mapsImg.classList.add("maps-image");

    addressFieldDiv.append(h1, para, mapsImg);

    main.append(addressFieldDiv);

    return main;
};

export { createContactPage };
