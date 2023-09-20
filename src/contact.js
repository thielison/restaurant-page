const createAddressDiv = () => {
    const addressFieldDiv = document.createElement("div");
    addressFieldDiv.classList.add("address-field");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Address";

    const para = document.createElement("p");
    para.textContent = "Rua Ernâni Schirmer, 283, Santa Maria - RS, CEP 99999-999, Brasil";

    const mapsImg = document.createElement("img");
    // mapsImg.src = "./images/maps-address.png";
    mapsImg.alt = "Google Maps Address Image";

    addressFieldDiv.append(h1, para, mapsImg);

    return addressFieldDiv;
};

const createContactFormDiv = () => {
    const formFieldDiv = document.createElement("div");
    formFieldDiv.classList.add("contact-form-field");

    const h1 = document.createElement("h1");
    h1.textContent = "Contact Form";

    const form = document.createElement("form");

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("placeholder", "Name");

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("placeholder", "Email");

    const textArea = document.createElement("textarea");
    textArea.setAttribute("name", "text");
    textArea.setAttribute("id", "message");
    textArea.setAttribute("placeholder", "Message");

    form.append(h1, nameInput, emailInput, textArea);

    formFieldDiv.append(form);

    return formFieldDiv;
};

const createContactInfoSection = () => {
    const contactSection = document.createElement("section");
    contactSection.classList.add("contact-section");

    contactSection.append(createAddressDiv(), createContactFormDiv());

    return contactSection;
};

export { createContactInfoSection };
