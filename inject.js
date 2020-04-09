Reveal.goto = slideNumber => {
    let indices = Reveal.getIndices(Reveal.getSlides()[slideNumber - 1]);
    Reveal.slide(indices.h, indices.v);
};

function gotoSlide() {
    let number = prompt("Entrez un numéro de diapo :", 1).trim();
    if (number.match(/^\d+$/))
        Reveal.goto(number);
    else
        alert("Ce n'est pas un numéro valide !");
}

gotoSlide();
