    
    const cardElement = document.createElement("div");
    const cardImgElement = document.createElement("div");
    const cardBodyElement = document.createElement("div");
    const cardTitleElement = document.createElement("h3");
    const cardTextElement = document.createElement("p");

    cardElement.classList.add("card");
    cardImgElement.classList.add("card-img-top");
    cardBodyElement.classList.add("card-body");
    cardTitleElement.classList.add("card-title");
    cardTextElement.classList.add("card-text");

    document.getElementById("projectCard").appendChild(cardElement);
    cardElement.appendChild(cardImgElement);
    cardElement.appendChild(cardBodyElement);
    cardBodyElement.appendChild(cardTitleElement);
    cardBodyElement.appendChild(cardTextElement);