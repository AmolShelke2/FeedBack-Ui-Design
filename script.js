const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", function (e) {
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

sendBtn.addEventListener("click", function (e) {
  panel.innerHTML = `
     
    <i class="fas fa-heart"></i>
    <strong>Thank you</strong>
    <br>
    <strong>FeedBack:${selectedRating}</strong>
    <p>We'll User your feedback to improve our customer support</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings.classList.remove("active");
  }
}
