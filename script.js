const buttonFind = document.querySelector(".btn_find");
const words = document.querySelector(".textarea");
const keyword = document.querySelector(".keyword");

let arrForWords;
let arrEqualWords;

buttonFind.addEventListener("click", function (e) {
  e.preventDefault();
  const newStr = words.value;
  const keyWord = keyword.value;

  if (newStr && keyWord) {
    arrForWords = newStr.split(" ");
    arrEqualWords = arrForWords.filter((item) => item === keyWord);
  }

  console.log(arrForWords, keyWord, arrEqualWords, arrEqualWords.length);
});

// const li = document.createElement("li");
// li.classList.add("found__item");
// document.getElementsByClassName("found__items--list").append(li);
