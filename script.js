const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "satisfied";

ratings.addEventListener("click", function (e) {
  if (
    e.target.parentNode.classList.contains("rating") &&
    e.target.nextelementSibling
  ) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextelementSibling.innerHTML;
  } else if (
    e.target.parentNode.classList.contains("rating") &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === "IMG"
  ) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.innerHTML;
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings.classList.remove("active");
  }
}
