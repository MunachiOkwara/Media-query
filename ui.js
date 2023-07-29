  const showPopBtn = document.querySelector(".Btn")
  const popCorn = document.querySelector(".popcorn")
  const closs = document.querySelector(".closs")


  showPopBtn.onclick = ()=> {
        popCorn.style.display = "flex"
  }

  closs.onclick = ()=> {
        popCorn.style.display = "none"
  }
  
  