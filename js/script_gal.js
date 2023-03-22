const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    seletorOpcao = optionMenu.querySelectorAll(".avaliableOptions .option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

const galerias = document.querySelector(".box-videos"),
      galeriaAlpha = galerias.querySelector("gallery-videos-alpha");

seletorOpcao.forEach(seletorOpcao =>{
    seletorOpcao.addEventListener("click", ()=>{
        let selectedOption = seletorOpcao.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        if(selectedOption == "Quadra Alpha Romeo"){
            galerias.classList.toggle("active");
        }else{
            galerias.classList.remove("active");

        }
        optionMenu.classList.remove("active");
    })  
})








