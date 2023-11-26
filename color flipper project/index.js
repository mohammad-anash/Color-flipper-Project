const color = document.querySelector(".color");
const buttonBtn = document.querySelector(".btn");

function CreateColorCode() {
  const colorCode = "abcdef123456789";
  const randomColorCode = Array.from({ length: 6 }).reduce((hash, current) => {
    const getRandomColorCode = Math.floor(Math.random() * colorCode.length);
    hash += colorCode[getRandomColorCode];
    return hash;
  }, "#");
  return randomColorCode;
}

buttonBtn.addEventListener("click", function () {
  color.textContent = CreateColorCode();
  document.body.style.backgroundColor = CreateColorCode();
});
