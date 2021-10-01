const btnToggleImage = document.getElementById("btnToggleImage");
const img1 = document.getElementById("img1");
btnToggleImage.addEventListener("click", changeImage);

function changeImage() {
  let imgSrc = img1.getAttribute("src");
  console.log("Initial Image", imgSrc);
  if (imgSrc === "S_1.jpg") {
    img1.setAttribute("src", "S_2.jpg");
  } else {
    img1.setAttribute("src", "S_1.jpg");
  }
}
