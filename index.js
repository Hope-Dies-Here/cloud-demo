const colorP = document.getElementById("inpColor")
const fontColor = document.getElementById("fontColor")
const theFont = document.getElementsByClassName("theFont")
const main = document.getElementById("main")

colorP.addEventListener("input", () => {
  main.style = `background-image: none; background-color: ${colorP.value};`
})
fontColor.addEventListener("input", () => {
  console.log(theFont)
  
  theFont.style = `color: ${fontColor.value}!important;`
})