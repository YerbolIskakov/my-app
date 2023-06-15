const buttonFind = document.querySelector(".find_btn");
const words = document.querySelector(".words");

let arrForWords;

const findWords = function (arr) {};

buttonFind.addEventListener("click", function (e) {
  e.preventDefault();
  const newStr = words.value;
  arrForWords = newStr.split(" ");
  console.log(arrForWords);
});
