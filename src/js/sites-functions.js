import sites from "../assets/sites/sites.js";

const sitesCont = document.getElementById("sitesCont");
const sitesData = sites();
const body = document.querySelector("body");

const closeModal = (modal) => {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.remove();  
  }, 2000)  
}

const activeModal = (cardId) => {
  const availSite = sitesData.find((site) => site.id.toString() === cardId);
  const { id, name, img, description, site, github } = availSite;
  const siteModal = document.createElement("div");
  siteModal.classList.add("site-modal", 'active');
  siteModal.id = id;

  const siteModalContainer = document.createElement("div");
  siteModalContainer.classList.add("site-modal-container");

  const siteModalHeader = document.createElement("h1");
  siteModalHeader.textContent = name;
  siteModalContainer.appendChild(siteModalHeader);

  const siteModalImg = document.createElement("img");
  siteModalImg.src = img;
  siteModalImg.alt = "tictactoeJs";
  siteModalContainer.appendChild(siteModalImg);

  const siteModalContent = document.createElement("div");
  siteModalContent.classList.add("site-modal-content");

  const siteModalDescription = document.createElement("p");
  siteModalDescription.textContent = description;
  siteModalContent.appendChild(siteModalDescription);

  const siteModalLinks = document.createElement("div");
  const siteModalLinkCont = document.createElement("p");
  siteModalLinkCont.textContent = "Link: ";

  const siteModalLink = document.createElement("a");
  siteModalLink.href = site;
  siteModalLink.textContent = site;
  siteModalLink.target = site;

  const githubModalLinkCont = document.createElement("p");
  githubModalLinkCont.textContent = "Github: ";

  const githubModalLink = document.createElement("a");
  githubModalLink.href = github;
  githubModalLink.textContent = github; 
  githubModalLink.target = github;

  githubModalLinkCont.appendChild(githubModalLink);
  siteModalLinkCont.appendChild(siteModalLink);

  siteModalLinks.appendChild(siteModalLinkCont);
  siteModalLinks.appendChild(githubModalLinkCont);

  siteModalContent.appendChild(siteModalLinks);

  siteModalContainer.appendChild(siteModalContent);
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-xmark");
  closeIcon.id = "closeIcon";
  
  siteModalContainer.appendChild(closeIcon);

  siteModal.appendChild(siteModalContainer);
  
  body.appendChild(siteModal);
  siteModal.addEventListener("click", () => {
    closeModal(siteModal);
  })
}


sitesData.forEach((availSite) => {
  const { id, name, img, shortDescription, site } = availSite;

  const siteCard = document.createElement("div");
  siteCard.classList.add("site");
  siteCard.id = id;

  const header = document.createElement("h3");
  header.textContent = name;

  const siteImg = document.createElement("img");
  siteImg.src = img;
  siteImg.alt = "tictactoeJs";

  const siteContent = document.createElement("div");
  siteContent.classList.add("site-content");

  const shortDescriptiontext = document.createElement("p");
  shortDescriptiontext.textContent = shortDescription;

  const siteLinkCont = document.createElement("p");
  siteLinkCont.textContent = "Link: ";

  const siteLink = document.createElement("a");
  siteLink.href = site;
  siteLink.textContent = site;
  siteLink.target = site;


  siteLinkCont.appendChild(siteLink);

  siteContent.appendChild(shortDescriptiontext);
  siteContent.appendChild(siteLinkCont);

  siteCard.appendChild(header);
  siteCard.appendChild(siteImg);
  siteCard.appendChild(siteContent);

  sitesCont.appendChild(siteCard);
});

const siteCards = document.querySelectorAll(".site");
siteCards.forEach((card) => {
  card.addEventListener("click", () => activeModal(card.id));
})
const closeIcon = document.querySelector(".fa-xmark");
if(closeIcon){
  closeIcon.addEventListener("click", () => {
    closeModal(document.querySelector(".site-modal"));
  })
}
