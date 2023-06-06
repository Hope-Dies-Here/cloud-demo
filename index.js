const colorP = document.getElementById("inpColor")
const fontColor = document.getElementById("fontColor")
const theFont = document.querySelectorAll(".theFont")
const main = document.getElementById("main")

colorP.addEventListener("input", () => {
  main.style = `background-image: none; background-color: ${colorP.value};`
})
  // console.log(theFont.length)
fontColor.addEventListener("input", () => {
  theFont.forEach(font => {
    font.style = `color: ${fontColor.value}!important;`
  })
})