import Image from "./images/maps-address.png";

const createContactSection = () => {
    const contactSection = document.createElement("section");
    contactSection.classList.add("contact-section");

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

    contactSection.append(addressFieldDiv);

    return contactSection;
};

export { createContactSection };
