function createFrontCards(){
    const sectionFront = document.querySelector(".sectionFront");
    
    for (let i = 0; i < frontEndJobs.length; i ++){
        const containerCard = document.createElement("section");
        containerCard.classList.add("containerFrontCard");
        sectionFront.appendChild(containerCard);

        const divCardTitle = document.createElement("div");
        divCardTitle.classList.add("cardHeader");
        const divMiniature = document.createElement("div");
        divMiniature.classList.add("miniatureDiv")
        const miniature = document.createElement("span");
        miniature.innerText = "G";
        divMiniature.appendChild(miniature);
        const divTitleInfo = document.createElement("div");
        divTitleInfo.classList.add("titleInfo");
        const nomeInfo = document.createElement("p");
        nomeInfo.innerText = frontEndJobs[i].title;
        divTitleInfo.appendChild(nomeInfo);
        const cidadeInfo = document.createElement("span");
        cidadeInfo.innerText = frontEndJobs[i].city;
        divTitleInfo.appendChild(cidadeInfo);

        divCardTitle.append(divMiniature, divTitleInfo);
        containerCard.appendChild(divCardTitle)

        const cardInfo = document.createElement("p");
        cardInfo.classList.add("description")
        cardInfo.innerText = frontEndJobs[i].descrription;
        containerCard.appendChild(cardInfo);

        const cardTags = document.createElement("div");
        cardTags.classList.add("cardFooter");
        const tag1 = document.createElement("span");
        tag1.innerText = frontEndJobs[i].modality[0]
        const tag2 = document.createElement("span");
        tag2.innerText = frontEndJobs[i].modality[1];
        containerCard.appendChild(cardTags);
        cardTags.append(tag1,tag2);

    }
}

function createBackCards(){
    const sectionBack = document.querySelector(".sectionBack");

    for (let i = 0; i < backEndJobs.length; i ++){
        const containerCard = document.createElement("section");
        containerCard.classList.add("containerBackCard");
        sectionBack.appendChild(containerCard);

        const divCardTitle = document.createElement("div");
        divCardTitle.classList.add("cardHeader");
        const divMiniature = document.createElement("div");
        divMiniature.classList.add("miniatureDiv")
        const miniature = document.createElement("span");
        miniature.innerText = "G";
        divMiniature.appendChild(miniature);
        const divTitleInfo = document.createElement("div");
        divTitleInfo.classList.add("titleInfo");
        const nomeInfo = document.createElement("p");
        nomeInfo.innerText = backEndJobs[i].title;
        divTitleInfo.appendChild(nomeInfo);
        const cidadeInfo = document.createElement("span");
        cidadeInfo.innerText = backEndJobs[i].city;
        divTitleInfo.appendChild(cidadeInfo);

        divCardTitle.append(divMiniature, divTitleInfo);
        containerCard.appendChild(divCardTitle)

        const cardInfo = document.createElement("p");
        cardInfo.classList.add("description")
        cardInfo.innerText = backEndJobs[i].descrription;
        containerCard.appendChild(cardInfo);

        const cardTags = document.createElement("div");
        cardTags.classList.add("cardFooter");
        const tag1 = document.createElement("span");
        tag1.innerText = backEndJobs[i].modality[0]
        const tag2 = document.createElement("span");
        tag2.innerText = backEndJobs[i].modality[1];
        containerCard.appendChild(cardTags);
        cardTags.append(tag1,tag2);

    }
}

createFrontCards();
createBackCards();

const vagaFront = document.querySelector("#frontBtn");
const vagaBack = document.querySelector("#backBtn");
const containerBack = document.querySelector(".containerBack");
const containerFront = document.querySelector(".containerFront");

vagaFront.addEventListener("click", () => {
    containerBack.style = "display: none;"
    containerFront.style = "display: block;"
})

vagaBack.addEventListener("click", () => {
    containerBack.style = "display: block;"
    containerFront.style = "display: none;"
})