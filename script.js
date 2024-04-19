function toggleMode() {
  const html = document.documentElement

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }

  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')){
    // se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "/img/avatar-light.png")
    img.setAttribute("alt", "Imagem de Sara Dantas com o céu de fundo")
  } else{
    // se estiver sem light mode, manter imagem normal
    img.setAttribute("src", "/img/avatar.png")
  }


  
}