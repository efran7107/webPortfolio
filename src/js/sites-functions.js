import sites from "../assets/sites/sites.js";

const sitesCont = document.getElementById("sitesCont");
const sitesData = sites();

sitesData.forEach((availSite) => {
  const { name, img, shortDescription, site } = availSite;

  const siteCard = document.createElement("div");
  siteCard.classList.add("site");

  const header = document.createElement("h1");
  header.textContent = name;

  const siteImg = document.createElement("img");
  siteImg.src = img;
  siteImg.alt = "tictactoeJs";

  const siteContent = document.createElement("div");
  siteContent.classList.add("site-content");

  const description = document.createElement("p");
  description.textContent = shortDescription;

  const siteLinkCont = document.createElement("p");
  siteLinkCont.textContent = "Link: ";

  const siteLink = document.createElement("a");
  siteLink.href = site;
  siteLink.textContent = site;
  siteLink.target = site;

  siteLinkCont.appendChild(siteLink);

  siteContent.appendChild(description);
  siteContent.appendChild(siteLinkCont);

  siteCard.appendChild(header);
  siteCard.appendChild(siteImg);
  siteCard.appendChild(siteContent);

  sitesCont.appendChild(siteCard);
});
