
    const paragraph = document.getElementById("paragraph");
    
    const couleur = document.getElementById("couleur");
    couleur.addEventListener("input", function (){
        paragraph.style.color = this.value;
    });

    const taille = document.getElementById("taille");

    taille.addEventListener("input", function () {
        paragraph.style.fontSize = `${this.value}px`;
    });

    const fontFamilySelect = document.getElementById("fontFamily");
    fontFamilySelect.addEventListener("change", function () {
        paragraph.style.fontFamily = this.value;
    });

