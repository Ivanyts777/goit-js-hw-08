// Імаорт масиву обєкту з картинками
import gallery from "./js/gallary-items.js";

// Отримую посилання на тег ul
const gallaryItems = document.querySelector(".js-gallery");

// Створюю трибути до галареї
const photoElement = function (arr, ul) {
  for (let elm of arr) {
    const imgForGallary = document.createElement("img");
    imgForGallary.classList.add("gallery__image");
    imgForGallary.setAttribute("alt", elm.description);
    imgForGallary.setAttribute("src", elm.preview);
    imgForGallary.setAttribute("data-source", elm.original);

    const imgForLink = document.createElement("a");
    imgForLink.appendChild(imgForGallary);

    const imgForLi = document.createElement("li");
    imgForLi.appendChild(imgForLink);

    ul.appendChild(imgForLi);
  }
};
photoElement(gallery, gallaryItems);

// Модельне вікно
const lightBox = document.querySelector(".js-lightbox");
// const lightBoxOvarlay = document.querySelector(".lightbox__overlay");
// const lightBoxContent = document.querySelector(".lightbox__content");
const lightBoxImg = document.querySelector(".lightbox__image");
const lightBoxBtn = document.querySelector(".lightbox__button");

const toShowItem = function (event) {
  if (event.target.nodeName === "IMG") {
    lightBox.classList.add("is-open");
    lightBoxImg.src = event.target.getAttribute("data-source");
  }
};
gallaryItems.addEventListener("click", toShowItem);

const toCloseItem = function (event) {
  lightBox.classList.remove("is-open");
  lightBoxImg.src = "";
};
lightBoxBtn.addEventListener("click", toCloseItem);
