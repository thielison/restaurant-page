import Image from "./images/pizza-img.png";

const pizzas = [
    { name: "Margherita", ingredients: "Tomato sauce, mozzarella, and oregano, etc..." },
    { name: "Quattro Stagioni", ingredients: "Tomato sauce, mozzarella, mushrooms, ham, artichokes..." },
    { name: "Carbonara", ingredients: "Tomato sauce, mozzarella, parmesan, eggs, and bacon" },
    { name: "Napoli", ingredients: "Tomato sauce, mozzarella, oregano, anchovies" },
    { name: "Marinara", ingredients: "Tomato sauce, garlic and basil" },
    { name: "Frutti di Mare", ingredients: "Tomato sauce and seafood" },
    { name: "Crudo", ingredients: "Tomato sauce, mozzarella and Parma ham, etc" },
    { name: "Quattro Formaggi", ingredients: "Tomato sauce, mozzarella, parmesan, gorgonzola cheese..." },
];

const createMenuPage = () => {
    const menuCardsDiv = document.createElement("div");
    menuCardsDiv.classList.add("menu-cards");

    for (let i = 0; i < 8; i++) {
        const pizzaCard = document.createElement("div");
        pizzaCard.classList.add(`pizza-card`);

        const pizzaImg = document.createElement("img");
        pizzaImg.src = Image;
        const h2 = document.createElement("h2");
        h2.textContent = pizzas[i].name;
        const para = document.createElement("p");
        para.textContent = pizzas[i].ingredients;

        pizzaCard.append(pizzaImg, h2, para);

        menuCardsDiv.append(pizzaCard);
    }

    return menuCardsDiv;
};

export { createMenuPage };
