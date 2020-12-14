var para = document.createElement("p");
var node = document.createTextNode("Learn what Fashion Draft has to offer");
para.appendChild(node);
var element = document.getElementById("DOM1");
element.appendChild(para);

const DOMH3 = document.getElementById("Offer");
Offer.classList.add("section-heading", "text-uppercase");
console.log(Offer.classList);

function Replace() {
  var x = document.getElementById("heading");

  if (x.classList.contains("section-heading")) {
    x.classList.replace("section-heading", "font-weight-bolder");
  }
}

Replace();

document.getElementById("learnMore").addEventListener("click", function () {
  alert("Website Undergoing Maintenance, please check back later!");
});
