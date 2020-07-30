const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
  newImage.onclick = function (e) {
    displayedImage.src = e.target.src;
  };
}

const newImage = document.createElement("img");
newImage.setAttribute("src", xxx);
thumbBar.appendChild(newImage);
