Reveal.goto = slideNumber => {
  const indices = Reveal.getIndices(Reveal.getSlides()[slideNumber - 1]);
  Reveal.slide(indices.h, indices.v);
};

Reveal.getCurrentSlideNumber = () => Reveal.getSlides().indexOf(Reveal.getCurrentSlide()) + 1;

function gotoSlide() {
  const number = prompt("Entrez un numéro de diapo :", Reveal.getCurrentSlideNumber()).trim();
  if (number.match(/^\d+$/))
    Reveal.goto(number);
  else
    alert("Ce n'est pas un numéro valide !");
}

gotoSlide();
