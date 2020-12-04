const button = document.getElementById("btn-change");
const navigation = document.getElementById("nav");
const btnColor = document.querySelector(".btn-change");
const bacgroundFullLayout = document.querySelector(".bg-container");
const textAndContant = document.querySelectorAll(".img-text__contant");
const footer = document.getElementById("footer");
// console.log(textAndContant);

button.addEventListener("click", () => {
  navigation.classList.toggle("switch-nav");

  btnColor.classList.toggle("switch-btn");

  bacgroundFullLayout.classList.toggle("back-ground__container");

  for (let i = 0; i < textAndContant.length; i++) {
    textAndContant[i].className = "black-tema";
    // console.log(textAndContant[i]);
  }

  // footer.classList.toggle("switch-footer");
});
