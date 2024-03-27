createNewProjectCard= (link,title,text) => {
    const card = document.createElement("div")
    card.classList.add("card")

    const cardImg = document.createElement("img")
    cardImg.classList.add("card-img-top")
    cardImg.src = link
    cardImg.alt = ''
    card.appendChild(cardImg)

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)

    const cardTitle = document.createElement("h3")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = title
    cardBody.appendChild(cardTitle)

    const cardText = document.createElement("p")
    cardText.classList.add("card-text")
    cardText.innerText=text
    cardBody.appendChild(cardText)
}

const resetForm = () =>{
    document.getElementsByClassName("addCard__title_value").value = ''
    document.getElementsByClassName("addCard__pictures_value").value = ''
    document.getElementsByClassName("addCard__text_value").value =''
}

const handleSubmit = (event) => {
    event.preventDefault()

    const formTitle = document.getElementsByClassName("addCard__title_value").value;
    const formLink = document.getElementsByClassName("addCard__pictures_value").value;
    const formText = document.getElementsByClassName("addCard__text_value").value

    const newProjectCard = createNewProjectCard(formLink,formTitle,formText);

    document.getElementById("formCard").appendChild(newProjectCard);

    resetForm()
}